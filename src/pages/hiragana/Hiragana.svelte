<script>
    import {hiragana} from './hiragana.js'
    let isInvalid = false;
    function getRandomHiragana () {
        return hiragana[Math.floor(Math.random()*hiragana.length)];
    };
    let question = getRandomHiragana();
    let answer;
    function helpUser(){
        answer = question.value;
    }
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
            answer = "";
        } else {
            isInvalid = true;
        }
    }
    function inputKeyPress(e) {
        if (e.charCode === 13) validate();
    }
</script>

<div class=kana-container>
    <div class="symbol" name="{question.value}">
        {question.symbol}
    </div>
    <div class="answer-line">
        <label for="answer">Answer</label>
        <input bind:value={answer} on:keypress={inputKeyPress} class:invalid-input={isInvalid} name="answer" type="text" placeholder="Answer" autocomplete="off">
        <!-- <button type="button" on:click={helpUser}>
            Help me
        </button>
        <button class="verify-button" type="button" on:click={validate}>
            Verify
        </button> -->
    </div>
    <div class=button-line>
        <div on:click={helpUser}>
            Help me
        </div>
        <div class="verify-button" on:click={validate}>
            Verify
        </div>
    </div>
</div>

<style type="text/scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap');
.kana-container {
    width: 500px;
    margin: 0 auto 0 auto;
    border: 2px solid #e5e5e5;
    border-radius: 16px;
}
.symbol {
    font-family: 'Noto Serif JP', serif;
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 200px;
    border-style: solid;
    border-color: #e5e5e5;
    border-width: 0 0 2px 0;
}

.answer-line {
    width: 90%;
    padding: 0;
    margin: 0 auto 0 auto;
    text-align: left;
    
    label {
        padding: 20px 0 7px 0;
    }

    input {
        top: 25px;
        width: 100%;
        padding: 0 0 2px 0 !important;
        border-style: solid;
        border-color: #e5e5e5;
        border-width: 0 0 2px 0;
        transition: 0.4s;
        padding: 10px;
        
        &:focus {
            outline: 0;
        }

        &:invalid {
        border-style: solid;
        border-color: red;
        border-width: 0 0 2px 0;
        }

        &::placeholder {
            color:transparent;
        }
    }

    .invalid-input {
        border-style: solid;
        border-color: red;
        border-width: 0 0 2px 0;
        transition: 0.7s;
    }

    button {
        margin: 0;
        width: 49.5%;
    }

    .verify-button {
        background-color: #bdffa1;
        border: 0px;
    }
}

.button-line {
    width: 100%;
    display: block;
    align-items: unset;

    div{
        width: 49.5%;
        height: 30px;
        margin: 0;
        display: inline-block;
        vertical-align: center;
        border-radius: 0 0 16px 0;

        &:hover {
            cursor: pointer;
            background-color: red;
        }
    }
}
</style>