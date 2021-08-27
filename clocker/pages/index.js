import { Login, Agenda } from "../components";
import firebase from './../config/firebase';

export default function Home() {

  const authenticatedUser = firebase.auth().currentUser

  return authenticatedUser ? <Agenda /> : <Login />
}
