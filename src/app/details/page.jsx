// import CommentList from "@/components/news/Comment-List";
import CommentsList from "@/components/news/CommentsList";
import NewsDetails from "@/components/news/NewsDetails";
import PopularList from "@/components/news/PopularList";

const { default: PlainLayout } = require("@/components/master/Plain-Layout");

async function getData(id) {
  let details = (
    await (await fetch(`${process.env.HOST}/api/news/details?id=${id}`)).json()
  )["data"];
  let popular = (
    await (await fetch(`${process.env.HOST}/api/news/type?type=popular`)).json()
  )["data"];
  let comments = (  await (await fetch(`${process.env.HOST}/api/comments/news?postID=${id}`)).json() )["data"];
  
  return { details: details, popular: popular, comments:comments };
}

async function Page(props) {
  const id = props.searchParams["id"];
  const data = await getData(id); 
  return (
    <PlainLayout>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
            <NewsDetails details={data['details']} />
            <CommentsList comments={data['comments']  }  postID={id}/>
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
