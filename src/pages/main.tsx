import Layout from "components/Layout";
import Card from "components/card/Card";
import CardTitle from "components/card/CardTitle";
import CardContent from "components/card/CardContent";
import Counter from "components/counter/Counter";

const MainPage = () => {
  return (<Layout>
    <div>This is the main page</div>
    <Card>
      <CardTitle>Counter</CardTitle>
      <CardContent>
        <Counter></Counter>
      </CardContent>
    </Card>
  </Layout>);
}

export default MainPage
