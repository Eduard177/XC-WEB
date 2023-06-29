export default function({ store, redirect }) {
  // If the user is not authenticated
  if (!store.getters['auth/getIsLoggedIn']) {
    return redirect('/login');
  }

  const user = store.getters['auth/getLoggedUser'];
  if (user.role !== 'Administrator') {
    return redirect('/unauthorized');
  }
}
