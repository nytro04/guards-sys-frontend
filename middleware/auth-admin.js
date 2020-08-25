export default async function({ $auth, redirect }) {
  const user = await $auth.state.user
  if (user && user.role === 'admin') {
    // todo something
  } else {
    // todo: send notification(you do not have permission,  contact your admin)
    // redirect to home page
    redirect('/')
  }
}
