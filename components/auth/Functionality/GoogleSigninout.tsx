import { auth, provider, signInWithPopup, signOut } from '../../../lib/firebase'; // Update the path as needed

const handleGoogleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Log the user info or do something with it
    console.log('User Info:', user);
    alert(`Welcome, ${user.displayName}`);
  } catch (error) {
    console.error('Error during Google Sign-In:', error);
    alert('Failed to sign in. Please try again.');
  }
};


const handleGoogleSignOut = async () => {
  try {
    await signOut(auth); // Clears the authenticated user's session
    // setUser(null); // Optionally clears the user state in your app
    console.log('Signed out successfully');
  } catch (error) {
    console.error('Sign-Out Error:', error); // Logs any errors that occur during sign-out
    alert('Failed to sign out. Please try again.');
  }
};

export { handleGoogleSignIn, handleGoogleSignOut };