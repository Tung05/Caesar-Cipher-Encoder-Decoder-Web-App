# Substitution Cipher Encoder/Decoder Web App

This project is a simple web application that implements a **substitution cipher** for encoding and decoding messages. It was developed as part of the **CS326 Web Programming** course to demonstrate encryption concepts and foundational web development skills.

## Features

- **Encode Messages**: Input a plaintext message and a substitution cipher key to generate an encoded message.
- **Decode Messages**: Input an encoded message and the same substitution cipher key to retrieve the original plaintext.
- **Interactive UI**: Real-time processing of user input with a clean and intuitive interface.
- **Customizable Key**: Users can specify a 26-character alphabet permutation as the cipher key for the substitution.

## Technologies Used

- **HTML**: For structuring the web application.
- **JavaScript**: For implementing the substitution cipher algorithm and real-time interactivity.

## How It Works

The substitution cipher replaces each letter in the plaintext with a corresponding letter from a user-defined key. The key must be a permutation of all 26 lowercase letters (e.g., `abcdefghijklmnopqrstuvwxyz` for no transformation, or `nopqrstuvwxyzabcdefghijklm` for ROT13).

1. Open the web application.
2. Enter a 26-character cipher key in the "Key" field (e.g., `nopqrstuvwxyzabcdefghijklm` for ROT13).
3. Type a message in the "Text to encode" field to see the encoded result.
4. Type an encoded message in the "Text to decode" field to retrieve the original message.

## Screenshot
![Encoder-Decoder-WebApp](https://github.com/user-attachments/assets/4468a44e-86ce-47d9-957d-0c4fc0dce5da)

