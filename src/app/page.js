"use client"
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import outputs from "../../amplify_outputs.json";
// import NavBar from '@/components/NavBar';  

Amplify.configure(outputs);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          {/* <NavBar /> */}
          <h1>welcome</h1>
        </main>
      )}
    </Authenticator>
  );
}