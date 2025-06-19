export const CSS = `
#waitlist-form-old {
.hs-form-field {
    color: #00363A;
    font-weight: 500;
}

.hs-form-field .input {
    padding: 0;
}

.hs-form-checkbox-display {
    display: flex;
    align-items: center;
    gap: 8px;
}

.hs-form-radio-display {
    display: flex;
    align-items: center;
    gap: 8px;
}

.hs-form-field input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 24px;
  height: 24px;
  border: 1px solid #CBCBC1;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  background-color: white;
}

.hs-form-field input[type="radio"]:checked {
  background-color: #00B7B5;
  border-color: #00B7B5;
}

.hs-form-field input[type="radio"]:checked::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 8px;
  width: 7px;
  height: 10px;
  border: solid #B7FBDB;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

ul.inputs-list.multi-container {
    display: flex;
    gap: 30px;
    margin-top: 8px;
}

.hs-fieldtype-text {
    margin-bottom: 24px;
}

.hs-fieldtype-text label {
    display: flex;
    align-items: center;
}

.hs-fieldtype-text span {
    font-size: 0px;
    transition: font-size 0.3s ease;
}

.hs-firstname.hs-fieldtype-text span {
    font-size: 12px !important;
}

.hs-fieldtype-text .input {
    padding: 0;
}

.hs-fieldtype-text .input input{
    width: 100%;
    border: 1px solid #00363A99;
    padding: 16px;
    height: 100%;
    border-radius: 8px;
}

.hs-fieldtype-text .input .hs-input.invalid{
    border-color: #F57E77;
}

.hs-dependent-field span{
    font-size: 12px;
    font-weight: 400;
    line-height: 100%;
    margin: 0 !important;
    width: 80%;
}

.hs-dependent-field label {
    display: flex;
    align-items: center;
    gap: 10px;
}

.hs-dependent-field input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 24px;
  height: 24px;
  border: 1px solid #CBCBC1;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  background-color: white;
}

.hs-dependent-field input[type="checkbox"]:checked {
  background-color: #00B7B5;
  border-color: #00B7B5;
}

.hs-dependent-field input[type="checkbox"]:checked::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 8px;
  width: 7px;
  height: 10px;
  border: solid #B7FBDB;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.hs-submit .actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
}

.hs-submit .actions::before {
    content: '*Campos obrigatórios';
    font-size: 12px;
    color: #00363A;
}

.hs-submit .actions.messageRemove::before {
    content: '';
    font-size: 0;
    color: #00363A;
}

.hs-submit .actions input{
    font-size: 14px;
    padding: 14px 22px;
    background: #00363A;
    color: white;
    font-weight: 700;
    border-radius: 1000px;
    text-align: center;
    cursor: pointer;
}

.hs-error-msg.hs-main-font-element {
    display: none;
}

.hs_error_rollup {
    text-align: center;
}

.hs-main-font-element {
    font-size: 12px;
    color: #F57E77;
    font-weight: 400;
}

.hs-main-font-element::before {
    content: '*';
     font-size: 12px;
    color: #F57E77;
    font-weight: 400;
}

}
`;
