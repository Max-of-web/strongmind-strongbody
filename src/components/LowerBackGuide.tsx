
import { useState } from 'react';
import { Check, Shield } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";

const LowerBackGuide = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success(t('emailSubscription.successToast.title'), {
        description: t('emailSubscription.successToast.description')
      });
      setEmail('');
      setIsSubmitting(false);
    }, 800);
  };

  // Get the benefits array from translations with fallback
  let benefits: string[] = [];
  try {
    const benefitsData = t('homepage.lowerBackGuide.benefits', { returnObjects: true });
    benefits = Array.isArray(benefitsData) ? benefitsData : [];
  } catch (error) {
    console.error('Error loading benefits:', error);
    // Fallback benefits
    benefits = [
      'Reduced pain and discomfort through proper movement patterns',
      'Smarter training approach that adapts to your energy levels',
      'Sustainable habits that fit into your lifestyle',
      'Stronger body awareness and connection',
      'Increased confidence in your movement abilities'
    ];
  }

  return (
    <section id="free-guide" className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="container-width px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Left column - Guide information */}
          <div className="md:w-1/2 bg-white dark:bg-slate-800 rounded-md shadow-md px-[35px] py-[30px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-white">
              {t('homepage.lowerBackGuide.sectionTitle')}
            </h2>
            <p className="mb-6 text-slate-700 dark:text-slate-200 text-lg">
              {t('homepage.lowerBackGuide.intro')}
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check size={22} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                  <span className="text-slate-700 dark:text-slate-200">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center text-sm mt-10 border-t border-slate-200 dark:border-slate-700 pt-4">
              <Shield size={18} className="mr-2 text-theme-tangerine" />
              <span className="text-slate-600 dark:text-slate-300">{t('homepage.lowerBackGuide.privacyNote')}</span>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="md:w-1/2">
            <style type="text/css">
              {`@import url("https://assets.mlcdn.com/fonts.css?version=1754385");`}
            </style>
            <style type="text/css">
              {`
                /* LOADER */
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
                height: ;
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
                  0% {
                  transform: rotate(0deg);
                  }
                  100% {
                  transform: rotate(360deg);
                  }
                }
                  #mlb2-29308250.ml-form-embedContainer {
                    box-sizing: border-box;
                    display: table;
                    margin: 0 auto;
                    position: static;
                    width: 100% !important;
                  }
                  #mlb2-29308250.ml-form-embedContainer h4,
                  #mlb2-29308250.ml-form-embedContainer p,
                  #mlb2-29308250.ml-form-embedContainer span,
                  #mlb2-29308250.ml-form-embedContainer button {
                    text-transform: none !important;
                    letter-spacing: normal !important;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper {
                    background-color: #f6f6f6;
                    
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
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper.embedPopup,
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper.embedDefault { width: 400px; }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper.embedForm { max-width: 400px; width: 100%; }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-align-left { text-align: left; }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-align-center { text-align: center; }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-align-default { display: table-cell !important; vertical-align: middle !important; text-align: center !important; }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-align-right { text-align: right; }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedHeader img {
                    border-top-left-radius: 4px;
                    border-top-right-radius: 4px;
                    height: auto;
                    margin: 0 auto !important;
                    max-width: 100%;
                    width: undefinedpx;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody {
                    padding: 20px 20px 0 20px;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody.ml-form-embedBodyHorizontal {
                    padding-bottom: 0;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent,
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent {
                    text-align: left;
                    margin: 0 0 20px 0;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4,
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4 {
                    color: #000000;
                    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                    font-size: 30px;
                    font-weight: 400;
                    margin: 0 0 10px 0;
                    text-align: left;
                    word-break: break-word;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p,
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p {
                    color: #000000;
                    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 20px;
                    margin: 0 0 10px 0;
                    text-align: left;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ul,
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol,
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ul,
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol {
                    color: #000000;
                    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                    font-size: 14px;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol,
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol {
                    list-style-type: lower-alpha;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol ol,
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol ol {
                    list-style-type: lower-roman;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p a,
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p a {
                    color: #000000;
                    text-decoration: underline;
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group {
                    text-align: left!important;
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group label {
                    margin-bottom: 5px;
                    color: #333333;
                    font-size: 14px;
                    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                    font-weight: bold; font-style: normal; text-decoration: none;;
                    display: inline-block;
                    line-height: 20px;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p:last-child,
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p:last-child {
                    margin: 0;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form {
                    margin: 0;
                    width: 100%;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent,
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow {
                    margin: 0 0 20px 0;
                    width: 100%;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow {
                    float: left;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent.horozintalForm {
                    margin: 0;
                    padding: 0 0 20px 0;
                    width: 100%;
                    height: auto;
                    float: left;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow {
                    margin: 0 0 10px 0;
                    width: 100%;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-last-item {
                    margin: 0;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-formfieldHorizintal {
                    margin: 0;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input {
                    background-color: #ffffff !important;
                    color: #333333 !important;
                    border-color: #cccccc;
                    border-radius: 4px !important;
                    border-style: solid !important;
                    border-width: 1px !important;
                    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                    font-size: 14px !important;
                    height: auto;
                    line-height: 21px !important;
                    margin-bottom: 0;
                    margin-top: 0;
                    margin-left: 0;
                    margin-right: 0;
                    padding: 10px 10px !important;
                    width: 100% !important;
                    box-sizing: border-box !important;
                    max-width: 100% !important;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-webkit-input-placeholder,
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-webkit-input-placeholder { color: #333333; }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-moz-placeholder,
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-moz-placeholder { color: #333333; }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-ms-input-placeholder,
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-ms-input-placeholder { color: #333333; }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-moz-placeholder,
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-moz-placeholder { color: #333333; }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow textarea, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow textarea {
                    background-color: #ffffff !important;
                    color: #333333 !important;
                    border-color: #cccccc;
                    border-radius: 4px !important;
                    border-style: solid !important;
                    border-width: 1px !important;
                    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                    font-size: 14px !important;
                    height: auto;
                    line-height: 21px !important;
                    margin-bottom: 0;
                    margin-top: 0;
                    padding: 10px 10px !important;
                    width: 100% !important;
                    box-sizing: border-box !important;
                    max-width: 100% !important;
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {
                      border-color: #cccccc!important;
                      background-color: #ffffff!important;
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input.custom-control-input[type="checkbox"]{
                    box-sizing: border-box;
                    padding: 0;
                    position: absolute;
                    z-index: -1;
                    opacity: 0;
                    margin-top: 5px;
                    margin-left: -1.5rem;
                    overflow: visible;
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {
                    border-radius: 4px!important;
                  }


                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::after, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::after, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::after {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::after, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::after {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input:checked~.custom-control-label::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::before  {
                      border-color: #000000!important;
                      background-color: #000000!important;
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::after, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::after, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::after, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::after {
                       top: 2px;
                       box-sizing: border-box;
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {
                       top: 0px!important;
                       box-sizing: border-box!important;
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {
                    top: 0px!important;
                       box-sizing: border-box!important;
                  }

                   #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::after {
                        top: 0px!important;
                        box-sizing: border-box!important;
                        position: absolute;
                        left: -1.5rem;
                        display: block;
                        width: 1rem;
                        height: 1rem;
                        content: "";
                   }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before {
                    top: 0px!important;
                    box-sizing: border-box!important;
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::before {
                      position: absolute;
                      top: 4px;
                      left: -1.5rem;
                      display: block;
                      width: 16px;
                      height: 16px;
                      pointer-events: none;
                      content: "";
                      background-color: #ffffff;
                      border: #adb5bd solid 1px;
                      border-radius: 50%;
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::after {
                      position: absolute;
                      top: 2px!important;
                      left: -1.5rem;
                      display: block;
                      width: 1rem;
                      height: 1rem;
                      content: "";
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {
                      position: absolute;
                      top: 4px;
                      left: -1.5rem;
                      display: block;
                      width: 16px;
                      height: 16px;
                      pointer-events: none;
                      content: "";
                      background-color: #ffffff;
                      border: #adb5bd solid 1px;
                      border-radius: 50%;
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after {
                      position: absolute;
                      top: 0px!important;
                      left: -1.5rem;
                      display: block;
                      width: 1rem;
                      height: 1rem;
                      content: "";
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {
                      position: absolute;
                      top: 0px!important;
                      left: -1.5rem;
                      display: block;
                      width: 1rem;
                      height: 1rem;
                      content: "";
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-radio .custom-control-label::after {
                      background: no-repeat 50%/50% 50%;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-checkbox .custom-control-label::after, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::after, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {
                      background: no-repeat 50%/50% 50%;
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-control, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-control {
                    position: relative;
                    display: block;
                    min-height: 1.5rem;
                    padding-left: 1.5rem;
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input {
                      position: absolute;
                      z-index: -1;
                      opacity: 0;
                      box-sizing: border-box;
                      padding: 0;
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label {
                      color: #000000;
                      font-size: 12px!important;
                      font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                      line-height: 22px;
                      margin-bottom: 0;
                      position: relative;
                      vertical-align: top;
                      font-style: normal;
                      font-weight: 700;
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-select, #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-select {
                    background-color: #ffffff !important;
                    color: #333333 !important;
                    border-color: #cccccc;
                    border-radius: 4px !important;
                    border-style: solid !important;
                    border-width: 1px !important;
                    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                    font-size: 14px !important;
                    line-height: 20px !important;
                    margin-bottom: 0;
                    margin-top: 0;
                    padding: 10px 28px 10px 12px !important;
                    width: 100% !important;
                    box-sizing: border-box !important;
                    max-width: 100% !important;
                    height: auto;
                    display: inline-block;
                    vertical-align: middle;
                    background: url('https://assets.mlcdn.com/ml/images/default/dropdown.svg') no-repeat right .75rem center/8px 10px;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                  }


                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow {
                    height: auto;
                    width: 100%;
                    float: left;
                  }
                  .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal { width: 70%; float: left; }
                  .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal { width: 30%; float: left; }
                  .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal.labelsOn { padding-top: 25px;  }
                  .ml-form-formContent.horozintalForm .ml-form-horizontalRow .horizontal-fields { box-sizing: border-box; float: left; padding-right: 10px;  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input {
                    background-color: #ffffff;
                    color: #333333;
                    border-color: #cccccc;
                    border-radius: 4px;
                    border-style: solid;
                    border-width: 1px;
                    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                    font-size: 14px;
                    line-height: 20px;
                    margin-bottom: 0;
                    margin-top: 0;
                    padding: 10px 10px;
                    width: 100%;
                    box-sizing: border-box;
                    overflow-y: initial;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button {
                    background-color: #1e3a8a !important;
                    border-color: #1e3a8a;
                    border-style: solid;
                    border-width: 1px;
                    border-radius: 4px;
                    box-shadow: none;
                    color: #ffffff !important;
                    cursor: pointer;
                    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                    font-size: 14px !important;
                    font-weight: 700;
                    line-height: 20px;
                    margin: 0 !important;
                    padding: 10px !important;
                    width: 100%;
                    height: auto;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button:hover {
                    background-color: #3159c5 !important;
                    border-color: #3159c5 !important;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type="checkbox"] {
                    box-sizing: border-box;
                    padding: 0;
                    position: absolute;
                    z-index: -1;
                    opacity: 0;
                    margin-top: 5px;
                    margin-left: -1.5rem;
                    overflow: visible;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description {
                    color: #000000;
                    display: block;
                    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                    font-size: 12px;
                    text-align: left;
                    margin-bottom: 0;
                    position: relative;
                    vertical-align: top;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label {
                    font-weight: normal;
                    margin: 0;
                    padding: 0;
                    position: relative;
                    display: block;
                    min-height: 24px;
                    padding-left: 24px;

                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label a {
                    color: #000000;
                    text-decoration: underline;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p {
                    color: #000000 !important;
                    font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;
                    font-size: 12px !important;
                    font-weight: normal !important;
                    line-height: 18px !important;
                    padding: 0 !important;
                    margin: 0 5px 0 0 !important;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p:last-child {
                    margin: 0;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit {
                    margin: 0 0 20px 0;
                    float: left;
                    width: 100%;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {
                    background-color: #1e3a8a !important;
                    border: none !important;
                    border-radius: 4px !important;
                    box-shadow: none !important;
                    color: #ffffff !important;
                    cursor: pointer;
                    font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;
                    font-size: 14px !important;
                    font-weight: 700 !important;
                    line-height: 21px !important;
                    height: auto;
                    padding: 10px !important;
                    width: 100% !important;
                    box-sizing: border-box !important;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading {
                    display: none;
                  }
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover {
                    background-color: #3159c5 !important;
                  }
                  .ml-subscribe-close {
                    width: 30px;
                    height: 30px;
                    background: url('https://assets.mlcdn.com/ml/images/default/modal_close.png') no-repeat;
                    background-size: 30px;
                    cursor: pointer;
                    margin-top: -10px;
                    margin-right: -10px;
                    position: absolute;
                    top: 0;
                    right: 0;
                  }
                  .ml-error input, .ml-error textarea, .ml-error select {
                    border-color: red!important;
                  }

                  .ml-error .custom-checkbox-radio-list {
                    border: 1px solid red !important;
                    border-radius: 4px;
                    padding: 10px;
                  }

                  .ml-error .label-description,
                  .ml-error .label-description p,
                  .ml-error .label-description p a,
                  .ml-error label:first-child {
                    color: #ff0000 !important;
                  }

                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p,
                  #mlb2-29308250.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p:first-letter {
                    color: #ff0000 !important;
                  }
                        @media only screen and (max-width: 400px){

                    .ml-form-embedWrapper.embedDefault, .ml-form-embedWrapper.embedPopup { width: 100%!important; }
                    .ml-form-formContent.horozintalForm { float: left!important; }
                    .ml-form-formContent.horozintalForm .ml-form-horizontalRow { height: auto!important; width: 100%!important; float: left!important; }
                    .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal { width: 100%!important; }
                    .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal > div { padding-right: 0px!important; padding-bottom: 10px; }
                    .ml-form-formContent.horozintalForm .ml-button-horizontal { width: 100%!important; }
                    .ml-form-formContent.horozintalForm .ml-button-horizontal.labelsOn { padding-top: 0px!important; }

                  }
              `}
            </style>

            <div id="mlb2-29308250" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-29308250">
              <div className="ml-form-align-center ">
                <div className="ml-form-embedWrapper embedForm">
                  <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                    <div className="ml-form-embedContent" style={{}}>
                      <h4>Gauk nemokamą gidą apie nugaros skausmą</h4>
                    </div>

                    <form className="ml-block-form" action="https://assets.mailerlite.com/jsonp/1654024/forms/162015638916695194/subscribe" data-code="" method="post" target="_blank">
                      <div className="ml-form-formContent">
                        <div className="ml-form-fieldRow ml-last-item">
                          <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                            <input aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="El. paštas" autoComplete="email" />
                          </div>
                        </div>
                      </div>

                      <div className="ml-form-checkboxRow ml-validate-required">
                        <label className="checkbox">
                          <input type="checkbox" />
                          <div className="label-description">
                            <p>Sutinku gauti naujienlaiškius apie sveikatą ir fizinį aktyvumą.</p>
                          </div>
                        </label>
                      </div>

                      <input type="hidden" name="ml-submit" value="1" />

                      <div className="ml-form-embedSubmit">
                        <button type="submit" className="primary">Atsisiųsti nemokamą gidą</button>
                        <button disabled style={{display: 'none'}} type="button" className="loading">
                          <div className="ml-form-embedSubmitLoad"></div>
                          <span className="sr-only">Loading...</span>
                        </button>
                      </div>

                      <input type="hidden" name="anticsrf" value="true" />
                    </form>
                  </div>

                  <div className="ml-form-successBody row-success" style={{display: 'none'}}>
                    <div className="ml-form-successContent">
                      <h4>Thank you!</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <script dangerouslySetInnerHTML={{
              __html: `
                function ml_webform_success_29308250() {
                  var $ = ml_jQuery || jQuery;
                  $('.ml-subscribe-form-29308250 .row-success').show();
                  $('.ml-subscribe-form-29308250 .row-form').hide();
                }
              `
            }} />
            
            <script src="https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024" type="text/javascript"></script>
            <script dangerouslySetInnerHTML={{
              __html: `fetch("https://assets.mailerlite.com/jsonp/1654024/forms/162015638916695194/takel")`
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LowerBackGuide;
