"use client";

import { Check, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const LowerBackGuide = () => {
  const {
    t
  } = useTranslation();
  let benefits: string[] = [];
  try {
    const data = t('homepage.lowerBackGuide.benefits', {
      returnObjects: true
    }) as unknown;
    benefits = Array.isArray(data) ? data as string[] : [];
  } catch {
    benefits = ['Reduced pain and discomfort through proper movement patterns', 'Smarter training approach that adapts to your energy levels', 'Sustainable habits that fit into your lifestyle', 'Stronger body awareness and connection', 'Increased confidence in your movement abilities'];
  }
  return <section id="free-guide" className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="container-width px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          <div className="md:w-1/2 bg-white dark:bg-slate-800 rounded-md shadow-md px-[35px] py-[30px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white">
              {t('homepage.lowerBackGuide.sectionTitle')}
            </h2>
            <ul className="space-y-4 mb-8">
              {benefits.map((b, i) => <li key={i} className="flex items-start">
                  <Check size={22} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                  <span className="text-slate-700 dark:text-slate-200">{b}</span>
                </li>)}
            </ul>
          </div>

          <div className="md:w-1/2 w-full mt-6 md:mt-0">
            <div className="flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg p-6 gap-4 max-w-[380px] w-full mx-auto md:mx-0">
              

              {/* MailerLite form */}
              <div className="w-full">
                <div dangerouslySetInnerHTML={{
                __html: `
                      <style type="text/css">@import url("https://assets.mlcdn.com/fonts.css?version=1756385");</style>
                      <style type="text/css">
                        .ml-form-embedSubmitLoad {
                          display: inline-block;
                          width: 20px;
                          height: 20px;
                        }
                        .g-recaptcha {
                          transform: scale(1);
                          -webkit-transform: scale(1);
                          transform-origin: 0 0;
                          -webkit-transform-origin: 0 0;
                        }
                        .sr-only {
                          position: absolute;
                          width: 1px;
                          height: 1px;
                          padding: 0;
                          margin: -1px;
                          overflow: hidden;
                          clip: rect(0,0,0,0);
                          border: 0;
                        }
                        .ml-form-embedSubmitLoad:after {
                          content: " ";
                          display: block;
                          width: 11px;
                          height: 11px;
                          margin: 1px;
                          border-radius: 50%;
                          border: 4px solid #fff;
                          border-color: #ffffff #ffffff #ffffff transparent;
                          animation: ml-form-embedSubmitLoad 1.2s linear infinite;
                        }
                        @keyframes ml-form-embedSubmitLoad {
                          0% { transform: rotate(0deg); }
                          100% { transform: rotate(360deg); }
                        }
                        #mlb2-29311269.ml-form-embedContainer {
                          box-sizing: border-box;
                          display: table;
                          margin: 0 auto;
                          position: static;
                          width: 100% !important;
                        }
                        #mlb2-29311269.ml-form-embedContainer h4,
                        #mlb2-29311269.ml-form-embedContainer p,
                        #mlb2-29311269.ml-form-embedContainer span,
                        #mlb2-29311269.ml-form-embedContainer button {
                          text-transform: none !important;
                          letter-spacing: normal !important;
                        }
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper {
                          background-color: transparent;
                          border-width: 0px;
                          border-color: transparent;
                          border-radius: 4px;
                          border-style: solid;
                          box-sizing: border-box;
                          display: inline-block !important;
                          margin: 0;
                          padding: 0;
                          position: relative;
                        }
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper.embedForm { 
                          max-width: 100%; 
                          width: 100%; 
                        }
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody {
                          padding: 0;
                        }
                         #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4 {
                           color: hsl(var(--foreground)) !important;
                           font-family: inherit !important;
                           font-size: 1.25rem !important;
                           font-weight: 700 !important;
                           margin: 0 0 20px 0 !important;
                           text-align: center !important;
                           word-break: break-word;
                           line-height: 1.3 !important;
                           letter-spacing: -0.01em !important;
                         }
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow {
                          margin: 0 0 16px 0;
                          width: 100%;
                        }
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input {
                          background-color: #ffffff !important;
                          color: #333333 !important;
                          border-color: #cccccc;
                          border-radius: 8px !important;
                          border-style: solid !important;
                          border-width: 1px !important;
                          font-family: inherit;
                          font-size: 1rem !important;
                          height: auto;
                          line-height: 1.5 !important;
                          margin: 0;
                          padding: 12px 16px !important;
                          width: 100% !important;
                          box-sizing: border-box !important;
                          max-width: 100% !important;
                          transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
                        }
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:focus {
                          outline: none !important;
                          border-color: hsl(var(--primary)) !important;
                          box-shadow: 0 0 0 3px hsl(var(--ring)) !important;
                        }
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::placeholder {
                          color: #6b7280 !important;
                          font-weight: 400 !important;
                        }
                        .dark #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input {
                          background-color: hsl(var(--background)) !important;
                          color: hsl(var(--foreground)) !important;
                          border-color: hsl(var(--border)) !important;
                        }
                        .dark #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::placeholder {
                          color: hsl(var(--muted-foreground)) !important;
                        }
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow {
                          margin: 16px 0 20px 0;
                          width: 100%;
                        }
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type="checkbox"] {
                          box-sizing: border-box;
                          padding: 0;
                          position: absolute;
                          z-index: -1;
                          opacity: 0;
                          margin-top: 5px;
                          margin-left: -1.5rem;
                          overflow: visible;
                        }
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label {
                          font-weight: normal;
                          margin: 0;
                          padding: 0;
                          position: relative;
                          display: block;
                          min-height: 24px;
                          padding-left: 24px;
                        }
                         #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description {
                           color: hsl(var(--foreground)) !important;
                           display: block;
                           font-family: inherit !important;
                           font-size: 0.8rem !important;
                           text-align: left;
                           margin-bottom: 0;
                           position: relative;
                           vertical-align: top;
                           line-height: 1.4 !important;
                           opacity: 0.9 !important;
                         }
                         #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description p {
                           color: hsl(var(--foreground)) !important;
                           margin: 0 !important;
                           font-family: inherit !important;
                           font-size: 0.8rem !important;
                           line-height: 1.4 !important;
                         }
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {
                          position: absolute;
                          top: 4px;
                          left: -1.5rem;
                          display: block;
                          width: 16px;
                          height: 16px;
                          pointer-events: none;
                          content: "";
                          background-color: #ffffff;
                          border: #cccccc solid 1px;
                          border-radius: 4px;
                          transition: border-color 0.2s ease, background-color 0.2s ease;
                        }
                        .dark #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {
                          background-color: hsl(var(--background));
                          border-color: hsl(var(--border));
                        }
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::before {
                          border-color: hsl(var(--primary)) !important;
                          background-color: hsl(var(--primary)) !important;
                        }
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::after {
                          position: absolute;
                          top: 0px !important;
                          left: -1.5rem;
                          display: block;
                          width: 1rem;
                          height: 1rem;
                          content: "";
                          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
                          background: no-repeat 50%/50% 50%;
                        }
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit {
                          margin: 0;
                          width: 100%;
                        }
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {
                          background-color: hsl(var(--primary)) !important;
                          border: none !important;
                          border-radius: 8px !important;
                          box-shadow: none !important;
                          color: hsl(var(--primary-foreground)) !important;
                          cursor: pointer;
                          font-family: inherit !important;
                          font-size: 1rem !important;
                          font-weight: 600 !important;
                          line-height: 1.5 !important;
                          height: auto;
                          padding: 12px 16px !important;
                          width: 100% !important;
                          box-sizing: border-box !important;
                          transition: background-color 0.2s ease, transform 0.1s ease !important;
                        }
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover {
                          background-color: hsl(var(--primary) / 0.9) !important;
                          transform: translateY(-1px) !important;
                        }
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:focus {
                          outline: none !important;
                          box-shadow: 0 0 0 3px hsl(var(--ring)) !important;
                        }
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:disabled {
                          opacity: 0.5 !important;
                          cursor: not-allowed !important;
                          transform: none !important;
                        }
                        #mlb2-29311269.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading {
                          display: none;
                        }
                        .ml-error input {
                          border-color: hsl(var(--destructive)) !important;
                        }
                        @media only screen and (max-width: 400px) {
                          .ml-form-embedWrapper.embedForm { 
                            width: 100% !important; 
                          }
                        }
                      </style>
                      
                      <div id="mlb2-29311269" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-29311269">
                        <div class="ml-form-align-center">
                          <div class="ml-form-embedWrapper embedForm">
                            <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
                              <div class="ml-form-embedContent">
                                <h4>Įrašyk el. paštą ir gidas netrukus atkeliaus</h4>
                              </div>
                              <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/1654024/forms/162021803147921327/subscribe" data-code="" method="post" target="ml_iframe">
                                <div class="ml-form-formContent">
                                  <div class="ml-form-fieldRow ml-last-item">
                                    <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                                      <input aria-label="email" aria-required="true" type="email" class="form-control" data-inputmask="" name="fields[email]" placeholder="El. paštas" autocomplete="email" required>
                                      <div class="ml-form-fieldError" style="display: none; color: #dc2626; font-size: 0.875rem; margin-top: 4px;"></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="ml-form-checkboxRow ml-validate-required">
                                  <label class="checkbox">
                                    <input type="checkbox" name="fields[newsletter_consent]" value="1" required>
                                    <div class="label-description">
                                      <p>Sutinku gauti naujienlaiškius apie sveikatą ir fizinį aktyvumą.</p>
                                    </div>
                                  </label>
                                  <div class="ml-form-fieldError" style="display: none; color: #dc2626; font-size: 0.875rem; margin-top: 4px;"></div>
                                </div>
                                <input type="hidden" name="ml-submit" value="1">
                                <div class="ml-form-embedSubmit">
                                  <button type="submit" class="primary">Atsisiųsti nemokamą gidą</button>
                                  <button disabled="disabled" style="display: none;" type="button" class="loading">
                                    <div class="ml-form-embedSubmitLoad"></div>
                                    <span class="sr-only">Loading...</span>
                                  </button>
                                </div>
                                <input type="hidden" name="anticsrf" value="true">
                              </form>
                              
                              <!-- Error message container -->
                              <div class="ml-form-errorBody" style="display: none; padding: 16px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; margin-top: 16px;">
                                <p style="color: #dc2626; margin: 0; font-size: 0.875rem;">Įvyko klaida. Bandykite dar kartą.</p>
                              </div>
                              
                              <!-- Fallback iframe for JSONP -->
                              <iframe name="ml_iframe" class="hidden" style="display: none; width: 0; height: 0; border: none;"></iframe>
                            </div>
                             <div class="ml-form-successBody row-success" style="display: none">
                               <div class="ml-form-successContent" style="text-align: center; padding: 20px 0;">
                                 <h4 style="color: #16a34a !important; font-size: 1.25rem !important; font-weight: 700 !important; margin: 0 0 12px 0 !important; line-height: 1.3 !important;">Ačiū, kad žengi pirmą žingsnį!</h4>
                                 <p style="font-size: 0.9rem !important; line-height: 1.4 !important; opacity: 0.9;"><strong>Gidas jau pakeliui – patikrink savo el. paštą.</strong></p>
                               </div>
                             </div>
                          </div>
                        </div>
                      </div>
                      
                      <script>
                        // Global JSONP callback handler
                        window.ml_webform_success_29311269 = function(res) {
                          const form = document.querySelector('.ml-subscribe-form-29311269');
                          if (!form) return;
                          
                          const rowForm = form.querySelector('.row-form');
                          const rowSuccess = form.querySelector('.row-success');
                          const errorBody = form.querySelector('.ml-form-errorBody');
                          const submitBtn = form.querySelector('button[type="submit"]');
                          const loadingBtn = form.querySelector('button.loading');
                          
                          if (res && res.success) {
                            // Success: hide form, show success message
                            if (rowForm) rowForm.style.display = 'none';
                            if (rowSuccess) rowSuccess.style.display = 'block';
                            if (errorBody) errorBody.style.display = 'none';
                          } else {
                            // Error: show error message, re-enable form
                            if (errorBody) errorBody.style.display = 'block';
                            if (submitBtn) submitBtn.style.display = 'inline-block';
                            if (loadingBtn) loadingBtn.style.display = 'none';
                          }
                        };
                        
                        // Form submission handler
                        document.addEventListener('DOMContentLoaded', function() {
                          const form = document.querySelector('.ml-subscribe-form-29311269 .ml-block-form');
                          if (!form) return;
                          
                          form.addEventListener('submit', function(e) {
                            e.preventDefault();
                            
                            const formData = new FormData(form);
                            const emailInput = form.querySelector('input[name="fields[email]"]');
                            const checkboxInput = form.querySelector('input[name="fields[newsletter_consent]"]');
                            const submitBtn = form.querySelector('button[type="submit"]');
                            const loadingBtn = form.querySelector('button.loading');
                            const errorBody = form.closest('.ml-subscribe-form-29311269').querySelector('.ml-form-errorBody');
                            const emailError = form.querySelector('.ml-field-email .ml-form-fieldError');
                            const checkboxError = form.querySelector('.ml-form-checkboxRow .ml-form-fieldError');
                            
                            // Clear previous errors
                            if (emailError) emailError.style.display = 'none';
                            if (checkboxError) checkboxError.style.display = 'none';
                            if (errorBody) errorBody.style.display = 'none';
                            
                            // Validate form
                            let hasErrors = false;
                            
                            if (!emailInput.value || !emailInput.validity.valid) {
                              if (emailError) {
                                emailError.textContent = 'Įveskite teisingą el. pašto adresą';
                                emailError.style.display = 'block';
                              }
                              hasErrors = true;
                            }
                            
                            if (!checkboxInput.checked) {
                              if (checkboxError) {
                                checkboxError.textContent = 'Privalote sutikti gauti naujienlaiškius';
                                checkboxError.style.display = 'block';
                              }
                              hasErrors = true;
                            }
                            
                            if (hasErrors) return;
                            
                            // Show loading state
                            if (submitBtn) submitBtn.style.display = 'none';
                            if (loadingBtn) loadingBtn.style.display = 'inline-block';
                            
                            // Submit via JSONP
                            const params = new URLSearchParams(formData);
                            params.append('callback', 'ml_webform_success_29311269');
                            
                            const script = document.createElement('script');
                            script.src = form.action + '?' + params.toString();
                            script.onerror = function() {
                              // Fallback: submit form normally to iframe
                              form.submit();
                            };
                            
                            document.head.appendChild(script);
                            
                            // Cleanup script after use
                            setTimeout(() => {
                              if (script.parentNode) {
                                script.parentNode.removeChild(script);
                              }
                            }, 5000);
                          });
                        });
                        
                        // Iframe fallback onload handler
                        document.addEventListener('DOMContentLoaded', function() {
                          const iframe = document.querySelector('iframe[name="ml_iframe"]');
                          if (iframe) {
                            iframe.onload = function() {
                              // If iframe loads, assume success (fallback)
                              setTimeout(() => {
                                window.ml_webform_success_29311269({ success: true });
                              }, 500);
                            };
                          }
                        });
                      </script>
                    `
              }} />
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-normal tracking-normal">
                Iki 80 % žmonių bent kartą gyvenime patiria nugaros skausmą. Šiame gide – svarbiausi faktai ir 7 paprasti žingsniai, kaip suprasti priežastis ir pradėti veikti jau šiandien
              </p>

              <div className="flex items-center text-sm border-t border-slate-200 dark:border-slate-700 pt-4">
                <Shield size={18} className="mr-2 text-theme-tangerine flex-shrink-0" />
                <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{t('homepage.lowerBackGuide.privacyNote')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default LowerBackGuide;