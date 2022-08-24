import React from "react";
import { Provider } from "react-redux";
import BlogList from "./components/BlogList";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import store from "./redux/store";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        {/*<!-- navigation -->*/}
        <NavBar />

        {/* search*/}
        <Search />

        <section class="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
          <div class="absolute inset-0">
            <div class="bg-white h-1/3 sm:h-2/3"></div>
          </div>
          <div class="relative max-w-7xl mx-auto">
            <Header />
            {/* <!-- card grid  --> */}
            <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {/* <!-- single card  --> */}
              <BlogList />
            </div>
          </div>
        </section>

        {/* {<!- footer --> */}
      </Provider>
    </React.Fragment>
  );
}

export default App;
