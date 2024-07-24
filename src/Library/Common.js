export const RNToast = (Toast, text2) => {
  Toast.show({
    type: 'prunnyToast',
    text2: text2,
  });
};

// Function to Obscure Email Using Asterisks
export const obscureEmail = emilString => {
  var splitEmail = emilString?.split('@');
  var domain = splitEmail[1];
  var name = splitEmail[0];
  return name?.substring(0, 3)?.concat('****@')?.concat(domain);
};

export const copyToClipboard = (Clipboard, text) => {
  Clipboard.setString(text);
};
