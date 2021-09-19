<script>
    import {Router, Link, Route} from "svelte-routing"
    import Hiragana from "../hiragana/Hiragana.svelte";
    export let url = "";
    const routes = [
        {url: 'hiragana', page: 'Hiragana'},
        {url: 'katakana', page:'Katakana'},
        {url: 'kanji', page:'Kanji'},
    ]
</script>

<Router url={url}>
    <nav>
        <div class="logo-container">
            <Link class="logo-link" to="/">KanaTeacher</Link>
        </div>
        <div class="menu-container">
            <ul>
                {#each routes as route}
                    <li><Link to={route.url}><h3>{route.page}</h3></Link></li>
                {/each}
            </ul>
        </div>
    </nav>
    <div>
        <Route path="hiragana" component={Hiragana}></Route>
    </div>
</Router>

<style type="text/scss">
@import '../../assets/css/font/monserrat';
@import '../../assets/css/headlines';

nav {
    height: 55px;
    padding: 0 25px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #e5e5e5;
}

.logo-container{
    .logo-link {
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        font-weight: 700;
        color: black;
        letter-spacing: 1px;
    }
}

.menu-container {
    ul{
        height: 100%;
        margin: 0;
        display: flex;
        list-style-type: none;
    }
    li{
        display: flex;
        position: relative;
        height: inherit;
        margin: 0 15px;
    
        &:first-child {
        margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
        &::after {
            content: "";
            width: 100%;
            height: 2px;
            display: block;
            position: absolute;
            bottom: 0px;
            background-color: transparent;
        }
        &:hover::after {
            background-color: #E499FF;
        }
    }
    a {
        &:hover h3{
            color: #E499FF;
        }
    }
    
}
</style>