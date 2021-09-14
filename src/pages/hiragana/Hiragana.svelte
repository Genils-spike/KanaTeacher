<script>
import { onMount } from 'svelte';

    import {hiragana} from './hiragana.js'
    let isInvalid = false;
    function getRandomHiragana () {
        return hiragana[Math.floor(Math.random()*hiragana.length)];
    };
    let question = getRandomHiragana();
    let answer
    function validate(){
        if (answer === question.value) {
            let newQuestionDuplicate = true;
            while (newQuestionDuplicate) {
                let tmpQuestion = getRandomHiragana()
                if (tmpQuestion != question) {
                    question = tmpQuestion;
                    newQuestionDuplicate = false;
                }
            }
            isInvalid = false;
            answer = ""
        } else {
            isInvalid = true;
        }
    }
</script>

<div class=hiragana-container>
    <div class="symbol">
        {question.symbol}
    </div>
    <div class="answer_div">
        <form>
            <label for="answer">Answer</label>
            <input bind:value={answer} class:invalid-input={isInvalid} name="answer" id="answer" type="text" placeholder="Answer" autocomplete="off">
            <button type="button" on:click={validate}>
                Verify
            </button>
        </form>
    </div>
</div>

<style type="text/scss">
.symbol {
height: 500px;
width: 500px;
border: 2px solid #e5e5e5;
border-radius: 16px;
margin: 0 auto 0 auto;
display: flex;
align-items: center;
justify-content: center;
font-size: 200px;
}

.answer_div{
    width: 500px;
    padding: 0;
    margin: 0 auto 0 auto;
    text-align: left;
    
    form {
        input {
            top: 25px;
            width: 100%;
            border: 2px solid #e5e5e5;
            transition: 0.4s;
            border-radius: 16px;
            padding: 10px;
            
            &:focus{
                outline: 0;
            }

            &:invalid{
                border: 2px solid red;
            }

            &::placeholder{
                color: transparent;
            }
        }

        .invalid-input{
            border: 2px solid red;
            transition: 0.7s;
        }

        label{
            padding: 20px 0 7px 0;
        }
    }
}
</style>