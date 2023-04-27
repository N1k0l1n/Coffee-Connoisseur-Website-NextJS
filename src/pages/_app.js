import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>
        <p>&copy; Coffee Connoisseur 2023</p>
      </footer>
    </div>
  );
}
