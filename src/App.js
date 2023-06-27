import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <>
      <Provider store={store}>
        <PostsList />
        <AddPostForm />
      </Provider>
    </>
  );
}

export default App;
