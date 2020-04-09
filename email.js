//email.jsw
// Lines 4-17 adapted from https://support.wix.com/en/article/corvid-tutorial-sending-an-email-on-form-submission by Matthew Sconyers

import {sendWithService} from 'backend/sendGrid';

export function sendEmail(subject, body) {
  const key = "Put API key here";
  const sender = "sender@example.com";
  const recipient = "recipient@example.com";
  return sendWithService(key, sender, recipient, subject, body);
}

export function sendEmailWithRecipient(subject, body, recipient) {
  const key = "Put API key here";
  const sender = "sender@example.com";
  return sendWithService(key, sender, recipient, subject, body);
}
