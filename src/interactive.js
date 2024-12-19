// TASK #2: import the decoder class
import decoder from "./decoderRingClass.js";

// Create a decoder object.
const d = new decoder("");

// TASK #3: Validate the cipher key text input
function validateKeyTextInput() {
  
  /* BEGIN_STUDENT
  throw new Error('Function not implemented');
  END_STUDENT */
  const k = document.getElementById("key");
  const check = /^[a-z]{26}$/;
  if (check.test(k.value.trim())) {
    k.style.backgroundColor = "white";
  } else {
    k.style.backgroundColor = "yellow";
  }
}

// TASK #3:  Color the encoded text box.
function colorEncodedTextBox() {
  /* BEGIN_STUDENT
  throw new Error('Function not implemented');
  END_STUDENT */
  const en = document.getElementById("encoded");
  if (en.value === "") {
    en.style.backgroundColor = "white";
    en.style.color = "black";
  } else {
    en.style.backgroundColor = "red";
    en.style.color = "white";
  }
}

// TASK #3: Encode the text in the encode text box.
function encodeText() {
  
  /* BEGIN_STUDENT
  throw new Error('Function not implemented');
  END_STUDENT */
  const e = document.getElementById("encode");
  document.getElementById("encoded").value = d.encode(e.value);
}

// TASK #3: Color the decoded text box.
function colorDecodedTextBox() {
  
  /* BEGIN_STUDENT
  throw new Error('Function not implemented');
  END_STUDENT */
  const de = document.getElementById("decoded");
  if (de.value === "") {
    de.style.backgroundColor = "white";
    de.style.color = "black";
  } else {
    de.style.backgroundColor = "green";
    de.style.color = "white";
  }
}

// TASK #3: Decode the text in the decode text box.
function decodeText() {
  
  /* BEGIN_STUDENT
  throw new Error('Function not implemented');
  END_STUDENT */
  const de = document.getElementById("decode");
  document.getElementById("decoded").value = d.decode(de.value); 
}

// TASK #4: Assign event handlers to events. Initialize background color for key
// input.
document.getElementById("key").style.backgroundColor = "yellow";

document.getElementById("key").addEventListener("keyup", validateKeyTextInput);

document.getElementById("encode").addEventListener("keyup", encodeText);
document.getElementById("encode").addEventListener("keyup", colorEncodedTextBox);

document.getElementById("decode").addEventListener("keyup", decodeText);
document.getElementById("decode").addEventListener("keyup", colorDecodedTextBox);