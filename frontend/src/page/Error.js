import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";

export default function Error() {
         const error = useRouteError();
         //  let title = "An unexpected error occurred";
          let message = "Sorry, an unexpected error occurred. Please try again later.";
          if (error.status === 500) {
                  message = JSON.parse(error.data).message;
          }

          if (error.status === 404) {
         //      title = "Page not found";
                  message = "Sorry, we couldn't find the page you're looking for.";
          }

  return (
    <PageContent title="An error occurred">
      <p>{message}</p>
    </PageContent>
  );
}
