import * as application from "tns-core-modules/application";

let context;
declare var global: any;

function getIntent(type) {
  const intent = new android.content.Intent(android.content.Intent.ACTION_SEND);
  intent.setType(type);
  return intent;
}

function share(intent, subject) {
  context = application.android.context;
  subject = subject || "How would you like to share this?";

  const shareIntent = android.content.Intent.createChooser(intent, subject);
  shareIntent.setFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
  context.startActivity(shareIntent);
}
function useAndroidX () {
  return global.androidx && global.androidx.appcompat;
}


export function shareUrl(url, text, subject) {
  const intent = getIntent("text/plain");

  intent.putExtra(android.content.Intent.EXTRA_TEXT, url);
  intent.putExtra(android.content.Intent.EXTRA_SUBJECT, text);

  share(intent, subject);
}
