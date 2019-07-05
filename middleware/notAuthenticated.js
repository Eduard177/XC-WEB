export default function({ store, redirect }) {
  console.log(store.getters['auth/getIsLoggedIn']);
  if (store.getters['auth/getIsLoggedIn']) {
    return redirect('/');
  }
}
