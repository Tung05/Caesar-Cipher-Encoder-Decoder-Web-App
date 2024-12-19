import decoder from "./decoderRingClass.js";

// Create a decoder object with an empty initial cipher
const d = new decoder("");

// Validate the cipher key text input
function validateKeyTextInput() {
  const k = document.getElementById("key");
  const check = /^[a-z]{26}$/;
  if (check.test(k.value.trim())) {
    k.style.backgroundColor = "white";
    // Set the cipher key for the decoder
    d.cipher = k.value.trim();
  } else {
    k.style.backgroundColor = "yellow";
  }
}

// Color the encoded text box
function colorEncodedTextBox() {
  const en = document.getElementById("encoded");
  if (en.value === "") {
    en.style.backgroundColor = "white";
    en.style.color = "black";
  } else {
    en.style.backgroundColor = "red";
    en.style.color = "white";
  }
}

// Encode the text in the encode text box
function encodeText() {
  const e = document.getElementById("encode");
  document.getElementById("encoded").value = d.encode(e.value);
}

// Color the decoded text box
function colorDecodedTextBox() {
  const de = document.getElementById("decoded");
  if (de.value === "") {
    de.style.backgroundColor = "white";
    de.style.color = "black";
  } else {
    de.style.backgroundColor = "green";
    de.style.color = "white";
  }
}

// Decode the text in the decode text box
function decodeText() {
  const de = document.getElementById("decode");
  document.getElementById("decoded").value = d.decode(de.value);
}

// Assign event handlers
document.getElementById("key").style.backgroundColor = "yellow";
document.getElementById("key").addEventListener("keyup", validateKeyTextInput);

document.getElementById("encode").addEventListener("keyup", encodeText);
document.getElementById("encode").addEventListener("keyup", colorEncodedTextBox);

document.getElementById("decode").addEventListener("keyup", decodeText);
document.getElementById("decode").addEventListener("keyup", colorDecodedTextBox);
