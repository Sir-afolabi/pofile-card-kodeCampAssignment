import "./App.css";
import Profile from "./Profile";
export default function App() {
  return (
    <div className="card-container">
      <Profile
        name="Emmanuel Afolabi"
        image="/profile-image.jpg"
        bio="I am a tenacious frontend developer whose core interests revolve around providing a beautiful user interface and interactions for the user. I like reading books, and i play four musical instruments coupled with singing beautifully too in my spare time."
      />
    </div>
  );
}
