const submitButton = document.querySelector(".submit-button");
const form = document.querySelector(".contact-form");
const alertDiv = document.querySelector(".alert");

const SERVICE_ID = "service_q42awk8";
const SEND_EMAIL_TO_USER_TEMP = "template_dvvgj0s";
const SEND_EMAIL_TO_ME_TEMP = "template_1q2z5x9";

const emailJSSendEmail = async (data, templateId) =>
  emailjs.send(SERVICE_ID, templateId, data);

const sendEmailToUser = async (userFullName, userEmail) => {
  const templateParams = {
    to_name: userFullName,
    user_email: userEmail,
    reply_to: "replytobaqir@gmail.com",
  };
  try {
    await emailJSSendEmail(templateParams, SEND_EMAIL_TO_USER_TEMP);
    alertDiv.style.opacity = 1;
    alertDiv.style.transform = "translateY(0)";
  } catch (error) {}
};

const sendEmailToMe = async (
  userFullName,
  userEmail,
  userPhone,
  userMessage,
  categoryOfDiscuss
) => {
  const templateParams = {
    to_name: userFullName,
    message: userMessage,
    user_email: userEmail,
    user_phone: userPhone,
    category_of_discuss: categoryOfDiscuss,
    reply_to: "replytobaqir@gmail.com",
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
