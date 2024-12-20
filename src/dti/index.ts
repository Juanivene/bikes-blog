export const DTI = (val: string): string | undefined =>
  process.env.env === 'test' ? val : undefined;

export const DTI_LIST = {
  BUTTON: (val: string) => `${val}-button`,
  DIV: (val: string) => `${val}-div`,
  FORM: {
    ADDRESS: 'address-input',
    AMOUNT: 'amount-input',
    BUTTON_CENTER_CAPITAL: 'oga-capital-btn',
    BUTTON_CENTER_CJC: 'oga-cjc-btn',
    BUTTON_CENTER_CJM: 'oga-cjm-btn',
    CATEGORY: 'category-input',
    CENTER: 'center-input',
    CITY: 'city-input',
    CLEAR_FORM: 'clear-form-button',
    CONSULTATION: 'consultation-input',
    COUNTRY: 'country-input',
    CONFIRM_PASSWORD: 'confirm-password-input',
    COVER: 'cover-input',
    CUIL_CUIT: 'cuil-cuit-input',
    CURRENT_PASSWORD: 'current-password-input',
    DATE: 'date-input',
    DEFENDANT: 'defendant-input',
    DEMANDING: 'demanding-input',
    DESCRIPTION: 'description-input',
    DNI: 'dni-input',
    EMAIL: 'email-input',
    FILE: 'file-input',
    FILES: 'files-input',
    FIRST_NAME: 'first-name-input',
    FROM_DATE: 'from-date-input',
    HOUR: 'hour-input',
    IPP: 'ipp-input',
    JURISDICTION: 'jurisdiction-input',
    LAST_NAME: 'last-name-input',
    LAWYER: 'lawyer-input',
    PASSWORD: 'password-input',
    PAYMENT_TYPE: 'payment-type-input',
    PROCEEDING: 'proceeding-input',
    PROSECUTOR: 'prosecutor-input',
    PHONE: 'phone-input',
    RADIO: (val: string) => `${val}-radio-input`,
    RECAPTCHA: 'recaptcha-input',
    RESOLUTION: 'resolution-input',
    ROLE: 'role-input',
    SEARCH: 'search-button',
    STATE: 'state-input',
    SUBMIT: 'submit-button',
    TOGGLE: (val: string) => `${val}-toggle-input`,
    TYPE: 'type-input',
    TYPE_PAYMENT: 'type-payment-input',
    UNIT: 'unit-input',
    ZIP: 'zip-input',
  },
  ACTIONS: {
    BACK: 'back',
    PRINT: 'print',
    GO_TO_TOP: 'go-to-top',
    TOGGLE_THEME: 'toggle-theme',
  },
  TABLES: {
    CELL: (val: string) => `${val}-cell`,
    ROW: (pos: number) => `row-#${pos}`,
    TABLE: (pos: number) => `table-#${pos}`,
  },
  CARD: (pos: number) => `card-#${pos}`,
  PAGINATION: {
    ENTRIES: 'select-entries',
    PAGE_SELECTOR: 'page-selector',
    CURRENT_PAGE_MESSAGE: 'current-page-message',
  },
  KEYWORDS: {
    ACTION_BUTTONS: 'action-buttons',
    AMOUNT: 'amount',
    ANSWER: 'answer',
    CATEGORY: 'category',
    CERTIFICATE: 'certificate',
    CONTENT: 'content',
    COVER: 'cover',
    DATE: 'date',
    DESCRIPTION: 'description',
    FILE: 'file',
    FILES: 'files',
    FOOTER_VERSION: 'footer-version',
    HAMBURGER_MENU: 'hamburger-menu',
    HOUR: 'hour',
    ID: (val: string) => `${val}-id`,
    JURISDICTION: 'jurisdiction',
    LINK: 'link',
    LINKS: 'links',
    LOT: 'lot',
    METHOD: 'method',
    NEXT: 'next',
    PREVIOUS: 'previous',
    PROCEEDING: 'proceeding',
    PROCESS: 'process',
    PROFILE: 'profile',
    RADICATION: 'radication',
    REASON: 'reason',
    STATE: 'state',
    TICKET: 'ticket',
    TIME: 'time',
    TOTAL_AMOUNT: 'total-amount',
    TYPE: 'type',
    UNIT: 'unit',
  },
  MENU: {
    IMAGE: (val: number) => `${val}-image`,
    LINK: (val: number) => `${val}-link`,
    LOGO: 'logo',
  },
};
