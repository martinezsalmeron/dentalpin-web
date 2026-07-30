/*
 * External links. Single source of truth — edit once here.
 */

export const GITHUB_REPO = 'https://github.com/martinezsalmeron/dentalpin';
export const GITHUB_LICENSE = `${GITHUB_REPO}/blob/main/LICENSE`;
export const GITHUB_ISSUES = `${GITHUB_REPO}/issues`;
export const GITHUB_DISCUSSIONS = `${GITHUB_REPO}/discussions`;
export const GITHUB_CONTRIBUTING = `${GITHUB_REPO}/blob/main/CONTRIBUTING.md`;

export const TELEGRAM_URL = 'https://t.me/dentalpin';

export const GITHUB_SPONSORS = 'https://github.com/sponsors/martinezsalmeron';
export const OPEN_COLLECTIVE = 'https://opencollective.com/dentalpin';

export const DEMO_URL = 'https://demo.dentalpin.com';
export const DOCS_URL = 'https://docs.dentalpin.com';
export const APP_URL = 'https://app.dentalpin.com';

/*
 * Brevo's hosted form endpoint. The target list is encoded in the token, so
 * this needs no API key and no list id — which is why both the pricing-page
 * waitlist and the contact-form opt-in can post to it with nothing in the
 * environment. It is public by design; it sits in the page HTML already.
 *
 * Fields it accepts: EMAIL (required), NOMBRE (the clinic name),
 * ACEPTA_PRIVACIDAD ('1', required), locale, and email_address_check (its
 * own honeypot, must be empty). Append `?isAjax=1` for a JSON reply instead
 * of an HTML page.
 */
export const BREVO_FORM_ACTION =
  'https://3a34dae1.sibforms.com/serve/MUIFALk1qeX5NclOreDHssTr-2MrMSZDLcB_DXQh0eIc7iz1yDm-N-CrbeFQfxdzXbik2SykZriKIfOU4ULDQWMWnyNCBWw-1FpP6hQTeJJiOIsAG9ejUolZcug_EEuY0u5ELXeAOjeNm5dtwXToSA4DIhkyZk35tmNy3dS93f77ovrpFKvdtGlIad4qVoODgxh7_iYOfjvw43HZuA==';
