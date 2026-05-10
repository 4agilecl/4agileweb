const { NetlifyAPI } = require('netlify');
const client = new NetlifyAPI(process.env.NETLIFY_AUTH_TOKEN);
client.updateHook({ hook_id: "6a0015b2c3bdc656d1c7debf", body: { data: { email: "contacto@4agille.cl", subject_template: "Prospecto desde sitio web" }, form_id: "69ff99778f0b410008d7263d", site_id: "7edfd63b-e0a4-4cc8-86ce-5579e00784d9", type: "email", event: "submission_created" } }).then(console.log).catch(console.error);
