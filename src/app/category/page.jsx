import PlainLayout from "@/components/master/Plain-Layout";
import NewsList from "@/components/news/NewsList";
import PopularList from "@/components/news/PopularList";

async function getData(id) {
  let news = ( await (await fetch(`${process.env.HOST}/api/news/category?id=${id}`)).json() )["data"];
  let popular = ( await (await fetch(`${process.env.HOST}/api/news/type?type=popular`)).json() )["data"];
  return { news: news ,popular:popular };
}

async function Page(props) {
  const id = props.searchParams["id"];
  const data = await getData(id);
  return (
    <PlainLayout>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
            <NewsList latest={data["news"]} />
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
            <PopularList popular={data["popular"]} />
       
          </div>

        </div>
      </div>
    </PlainLayout>
  );
}

export default Page;
