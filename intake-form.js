(function () {
  const form = document.getElementById("intake-form");
  const thankyou = document.getElementById("intake-thankyou");
  const formWrap = document.getElementById("intake-form-wrap");
  const errorEl = document.getElementById("intake-error");
  const planValidationEl = document.getElementById("intake-plan-validation");
  const progressFill = document.querySelector(".intake-progress__fill");
  const progressLabel = document.querySelector(".intake-progress__label");

  /** Submissions handled by Netlify Forms (see contact.html data-netlify on #intake-form). */

  /** Optional URL prefill: ?plan=local|multi|undecided  &  ?redesign=yes|no|1|0 (maintenance is not a intake plan) */

  const ORDER_FIXED = [
    "welcome",
    "plan_select",
    "website",
    "business",
    "competitors",
    "access_website",
    "access_hosting",
    "platform",
    "seo_before",
  ];

  function getSeoBeforeValue() {
    const el = form.querySelector('input[name="seo_before"]:checked');
    return el ? el.value : null;
  }

  function buildSequence() {
    const seoYes = getSeoBeforeValue() === "yes";
    const mid = seoYes ? ["seo_failed"] : [];
    return [
      ...ORDER_FIXED,
      ...mid,
      "locations",
      "services",
      "extra",
      "contact_info",
    ];
  }

  let sequence = buildSequence();
  let stepIndex = 0;

  function currentStepId() {
    return sequence[stepIndex];
  }

  function screenEl(id) {
    return form.querySelector(`[data-intake-step="${id}"]`);
  }

  function setProgress() {
    const id = currentStepId();
    const substantive = sequence.filter(function (s) {
      return s !== "welcome";
    });
    const total = substantive.length;
    const pos = substantive.indexOf(id);
    let pct = 0;
    if (id === "welcome") {
      pct = 0;
    } else if (pos >= 0) {
      pct = ((pos + 1) / total) * 100;
    }
    if (progressFill) {
      progressFill.style.width = Math.min(100, Math.max(0, pct)) + "%";
    }
    if (progressLabel) {
      if (id === "welcome") {
        progressLabel.textContent = "";
      } else {
        progressLabel.textContent = "Question " + (pos + 1) + " of " + total;
      }
    }
  }

  function clearValidationError() {
    if (errorEl && errorEl.getAttribute("data-intake-validation") === "true") {
      errorEl.hidden = true;
      errorEl.textContent = "";
      errorEl.removeAttribute("data-intake-validation");
    }
    if (planValidationEl && planValidationEl.getAttribute("data-intake-validation") === "true") {
      planValidationEl.hidden = true;
      planValidationEl.textContent = "";
      planValidationEl.removeAttribute("data-intake-validation");
    }
  }

  function showValidationError(message, usePlanInline) {
    if (usePlanInline && planValidationEl) {
      planValidationEl.textContent = message;
      planValidationEl.hidden = false;
      planValidationEl.setAttribute("data-intake-validation", "true");
      if (errorEl) {
        errorEl.hidden = true;
        errorEl.textContent = "";
        errorEl.removeAttribute("data-intake-validation");
      }
      planValidationEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      return;
    }
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.hidden = false;
      errorEl.setAttribute("data-intake-validation", "true");
      if (planValidationEl) {
        planValidationEl.hidden = true;
        planValidationEl.textContent = "";
        planValidationEl.removeAttribute("data-intake-validation");
      }
      errorEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function showActiveStep() {
    sequence = buildSequence();
    if (stepIndex >= sequence.length) {
      stepIndex = sequence.length - 1;
    }
    clearValidationError();
    const activeId = currentStepId();
    form.querySelectorAll(".intake-screen").forEach(function (panel) {
      const isActive = panel.getAttribute("data-intake-step") === activeId;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });

    const activePanel = screenEl(activeId);
    const nextBtn = activePanel && activePanel.querySelector(".intake-next");
    if (nextBtn) {
      const lastId = sequence[sequence.length - 1];
      nextBtn.textContent = activeId === lastId ? "Submit" : "Continue";
    }

    setProgress();

    const panel = screenEl(activeId);
    if (panel) {
      const focusTarget = panel.querySelector(
        "input:not([type='hidden']), textarea, button.intake-next, select"
      );
      if (focusTarget && activeId !== "welcome") {
        window.setTimeout(function () {
          focusTarget.focus();
        }, 80);
      }
    }
  }

  function validateStep(id) {
    if (id === "welcome") {
      return true;
    }
    const panel = screenEl(id);
    if (!panel) {
      return true;
    }

    const radioNames = {};
    panel.querySelectorAll('input[type="radio"]').forEach(function (r) {
      radioNames[r.name] = true;
    });
    for (const name in radioNames) {
      if (!form.querySelector('input[name="' + name + '"]:checked')) {
        const any = form.querySelector('input[name="' + name + '"]');
        if (any) {
          any.focus();
        }
        var isPlanStep = id === "plan_select";
        if (isPlanStep) {
          if (name === "plan") {
            showValidationError(
              "Please select a growth plan (or “Not sure yet”) before continuing.",
              true
            );
          } else if (name === "redesign_addon") {
            showValidationError(
              "Please choose whether you want the website redesign add-on before continuing.",
              true
            );
          } else {
            showValidationError("Please select an option before continuing.", true);
          }
        } else {
          showValidationError(
            "Please select an option before continuing.",
            false
          );
        }
        return false;
      }
    }

    const firstInvalid = panel.querySelector("input:invalid, textarea:invalid");
    if (firstInvalid) {
      firstInvalid.focus();
      firstInvalid.reportValidity();
      return false;
    }

    return true;
  }

  function goNext() {
    const id = currentStepId();
    if (!validateStep(id)) {
      return;
    }
    clearValidationError();

    sequence = buildSequence();

    if (stepIndex >= sequence.length - 1) {
      submitForm();
      return;
    }

    stepIndex += 1;
    showActiveStep();
  }

  function goBack() {
    if (stepIndex <= 0) {
      return;
    }
    stepIndex -= 1;
    sequence = buildSequence();
    if (stepIndex >= sequence.length) {
      stepIndex = sequence.length - 1;
    }
    showActiveStep();
  }

  function submitForm() {
    if (errorEl) {
      errorEl.hidden = true;
      errorEl.textContent = "";
      errorEl.removeAttribute("data-intake-validation");
    }
    if (planValidationEl) {
      planValidationEl.hidden = true;
      planValidationEl.textContent = "";
      planValidationEl.removeAttribute("data-intake-validation");
    }

    var captchaResponse = form.querySelector(
      'textarea[name="g-recaptcha-response"]'
    );
    if (
      captchaResponse &&
      !String(captchaResponse.value || "").trim()
    ) {
      if (errorEl) {
        errorEl.hidden = false;
        errorEl.textContent =
          "Please complete the reCAPTCHA challenge before submitting.";
        errorEl.removeAttribute("data-intake-validation");
      }
      return;
    }

    const submitBtn = form.querySelector(".intake-next");
    if (submitBtn) {
      submitBtn.disabled = true;
    }

    const params = new URLSearchParams(new FormData(form));
    params.set("form-name", form.getAttribute("name") || "intake");
    var actionAttr = form.getAttribute("action") || "/contact.html";
    var postUrl = new URL(actionAttr, window.location.href).pathname;

    fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    })
      .then(function (res) {
        if (!res.ok) {
          throw new Error("Submit failed");
        }
        if (formWrap) {
          formWrap.hidden = true;
        }
        form.hidden = true;
        if (thankyou) {
          thankyou.hidden = false;
          const h = thankyou.querySelector("h2");
          if (h) {
            h.focus();
          }
        }
      })
      .catch(function () {
        if (errorEl) {
          errorEl.hidden = false;
          errorEl.textContent =
            "Something went wrong. Please try again or email us directly.";
        }
        if (submitBtn) {
          submitBtn.disabled = false;
        }
      });
  }

  form.addEventListener("click", function (e) {
    if (e.target.classList.contains("intake-next")) {
      e.preventDefault();
      goNext();
    }
    if (e.target.classList.contains("intake-back")) {
      e.preventDefault();
      goBack();
    }
  });

  form.addEventListener("keydown", function (e) {
    if (e.key !== "Enter") {
      return;
    }
    const id = currentStepId();
    if (id === "welcome") {
      return;
    }
    const tag = (e.target && e.target.tagName) || "";
    if (tag === "TEXTAREA") {
      return;
    }
    if (e.target.classList && e.target.classList.contains("intake-next")) {
      return;
    }
    e.preventDefault();
    goNext();
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });

  form.addEventListener("change", function (e) {
    var t = e.target;
    if (!t || t.name !== "plan" && t.name !== "redesign_addon") {
      return;
    }
    if (screenEl("plan_select") && screenEl("plan_select").contains(t)) {
      clearValidationError();
    }
  });

  function applyUrlPrefill() {
    try {
      var params = new URLSearchParams(window.location.search);
      var plan = (params.get("plan") || "").toLowerCase();
      if (plan === "maintenance") {
        plan = "undecided";
      }
      if (plan === "local" || plan === "multi" || plan === "undecided") {
        var pEl = form.querySelector('input[name="plan"][value="' + plan + '"]');
        if (pEl) {
          pEl.checked = true;
        }
      }
      var redesign = (params.get("redesign") || "").toLowerCase();
      if (redesign === "1" || redesign === "yes" || redesign === "true") {
        var yesRd = form.querySelector('input[name="redesign_addon"][value="yes"]');
        if (yesRd) {
          yesRd.checked = true;
        }
      } else if (redesign === "0" || redesign === "no") {
        var noRd = form.querySelector('input[name="redesign_addon"][value="no"]');
        if (noRd) {
          noRd.checked = true;
        }
      }
    } catch (err) {
      /* ignore */
    }
  }

  applyUrlPrefill();
  showActiveStep();
})();
