//email.jsw
// Lines 4-17 adapted from https://support.wix.com/en/article/corvid-tutorial-sending-an-email-on-form-submission by Matthew Sconyers

import {sendWithService} from 'backend/sendGrid';

export function sendEmail(subject, body) {
  const key = "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";
  const sender = "english4life@gmail.com";
  const recipient = "mmsconyers@liberty.edu";
  return sendWithService(key, sender, recipient, subject, body);
}

export function sendEmailWithRecipient(subject, body, recipient) {
  const key = "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";
  const sender = "english4life@gmail.com";
  return sendWithService(key, sender, recipient, subject, body);
}