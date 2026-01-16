import {
  signInWithRedirect,
  signOut,
  fetchAuthSession,
  getCurrentUser,
} from "aws-amplify/auth";

export async function login() {
  await signInWithRedirect();
}

export async function logout() {
  await signOut({ global: true });
}

export async function getIdToken(): Promise<string | null> {
  try {
    const session = await fetchAuthSession();
    return session.tokens?.idToken?.toString() ?? null;
  } catch {
    return null;
  }
}

export async function getUserEmail(): Promise<string | null> {
  try {
    const session = await fetchAuthSession();
    const email = session.tokens?.idToken?.payload?.email;
    return typeof email === "string" ? email : null;
  } catch {
    return null;
  }
}

export async function isAuthed(): Promise<boolean> {
  try {
    await getCurrentUser();
    return true;
  } catch {
    return false;
  }
}
