import PlainLayout from "@/components/master/Plain-Layout";
import Hero from "@/components/news/Hero";
import NewsList from "@/components/news/NewsList";
import PopularList from "@/components/news/PopularList";

async function getData() {
  let slider = (
    await (await fetch(`${process.env.HOST}/api/news/type?type=slider`)).json()
  )["data"];
  let feature = (
    await (await fetch(`${process.env.HOST}/api/news/type?type=feature`)).json()
  )["data"];
  let popular = (
    await (await fetch(`${process.env.HOST}/api/news/type?type=popular`)).json()
  )["data"];
  let latestNews = (
    await (await fetch(`${process.env.HOST}/api/news/all-news`)).json()
  )["data"];

  return {
    slider: slider,
    feature: feature,
    popular: popular,
    latestNews: latestNews,
  };
}
export default async function Home() {
  const data = await getData();
  return (
    <>
      <PlainLayout>
        <Hero featured={data["feature"]} slider={data["slider"]} />
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-9 col-lg-9 col-sm-12 ">
              <NewsList latest={data["latestNews"]} />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12  ">
              <PopularList popular={data["popular"]} />
            </div>
          </div>
        </div>
      </PlainLayout>
    </>
  );
}
