app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">
    
    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating</label>
    <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
    </select>

    <p>Would you recommend this product?</p>
    <input id="chackBox" type="checkbox" @change="toggleIsRecommending">
    
    

    <input class="button" type="submit" value="Submit">
    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            isRecommending: false
        }
    },
    methods: {
        onSubmit(){
            if(this.name === '' || this.review === '' || this.rating === ''){
            alert("no  good")
            return;
            }
            let productReview={
            name: this.name,
            review: this.review,
            rating: this.rating,
            isRecommending: this.isRecommending
            }
            this.$emit('review_submitted', productReview)
            this.name=''
            this.review=''
            this.rating=null
            this.isRecommending = false;
            // document.getElementById("chackBox").checked = false;
        },
        toggleIsRecommending(){
            this.isRecommending = !this.isRecommending
        }
    }
})