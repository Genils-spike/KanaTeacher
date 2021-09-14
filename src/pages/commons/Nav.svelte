<script>
    import {Router, Link, Route} from "svelte-routing"
    import Hiragana from "../hiragana/Hiragana.svelte";

    export let url = "";
</script>

<Router url={url}>
    <nav>
        <Link to="hiragana">Hiragana</Link>
    </nav>
    <div>
        <Route path="hiragana" component="{Hiragana}"/>
    </div>
</Router>