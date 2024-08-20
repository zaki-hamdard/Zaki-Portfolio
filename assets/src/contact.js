const submitButton = document.querySelector(".submit-button");
const form = document.querySelector(".contact-form");
const alertDiv = document.querySelector(".alert");

const SERVICE_ID = "service_wdx9rmr";
// const SEND_EMAIL_TO_USER_TEMP = "template_dvvgj0s";
const SEND_EMAIL_TO_ME_TEMP = "template_v6yc56d";

const emailJSSendEmail = async (data, templateId) =>
  emailjs.send(SERVICE_ID, templateId, data);

// const sendEmailToUser = async (userFullName, userEmail) => {
//   const templateParams = {
//     to_name: userFullName,
//     user_email: userEmail,
//     reply_to: "replytobaqir@gmail.com",
//   };
//   try {
//     await emailJSSendEmail(templateParams, SEND_EMAIL_TO_USER_TEMP);
//     alertDiv.style.opacity = 1;
//     alertDiv.style.transform = "translateY(0)";
//   } catch (error) {}
// };

const sendEmailToMe = async (
  userFullName,
  userEmail,
  userPhone,
  userMessage,
  categoryOfDiscuss
) => {
  const templateParams = {
    from_name: userFullName,
    message: userMessage,
    from_email: userEmail,
    from_phone: userPhone,
    owner_email:"",
    category_of_discuss: categoryOfDiscuss,
    reply_to: "replytozaki@gmail.com",
  };

  try {
    const result = await emailJSSendEmail(
      templateParams,
      SEND_EMAIL_TO_ME_TEMP
    );
  } catch (error) {}
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const submitButton = form.querySelector(".submit-button");
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  const inputs = form.querySelectorAll("input");
  const textArea = form.querySelector("textarea");
  const select = form.querySelector("select");
  const FullName = `${inputs[0].value} ${inputs[1].value}`;
  const email = inputs[2].value;
  const phone = inputs[3].value;
  const message = textArea.value;
  const subject = select.value;

  await sendEmailToUser(FullName, email);
  //   await sendEmailToMe(FullName, email, phone, message, subject);
});

(function () {
  emailjs.init({
    publicKey: "CHaBQTP6VQc-7yloB",
  });
})();
