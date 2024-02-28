import {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from '../firebase';

test('logInWithEmailAndPassword should authenticate with valid credentials', async () => {
  const validEmail = 'fdsfdsf@gmail.com';
  const validPassword = 'Qwerty12345!';

  await expect(
    logInWithEmailAndPassword(validEmail, validPassword)
  ).resolves.not.toThrow();
});

test('logInWithEmailAndPassword should throw an error with invalid credentials', async () => {
  const invalidEmail = 'invalid@example.com';
  const invalidPassword = 'invalidpassword';

  await expect(
    logInWithEmailAndPassword(invalidEmail, invalidPassword)
  ).rejects.toThrow();
});

test('registerWithEmailAndPassword should throw an error with invalid input', async () => {
  const name = 'Test User';
  const invalidEmail = 'invalidemail';
  const password = 'password123';

  await expect(
    registerWithEmailAndPassword(name, invalidEmail, password)
  ).rejects.toThrow();
});
