import Layout from "../Layout/Layout";
import { useAuth } from "../Providers/AuthProvider";

const Checkout = () => {
  const userData = useAuth();
  return (
    <Layout>
      {userData ? (
        <>
          <p>name : {userData.name}</p>
          <p>email : {userData.email}</p>
          <p>tel : {userData.phoneNumber}</p>
        </>
      ) : (
        <p>please log in</p>
      )}
    </Layout>
  );
};
export default Checkout;
