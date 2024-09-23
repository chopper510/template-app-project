import PostList from "../PostList";

function HomePage(){
    return(        <section class="mobile-block">
        <div class="mobile-block_header is-danger">
            Список International
        </div>
        <PostList />
    </section>);
}

export default HomePage;