<template>
    <div class="comments-container" v-if="comments.length">
        <h1>Comments:</h1>
        <ul>
            <li v-for="comment in comments" :key="comment.id">
                <hr />
                <p><strong>E-mail:</strong> {{ comment.mail }}</p>
                <p><strong>Message:</strong> {{ comment.text }}</p>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  props: ['comments']
}
</script>

<style scoped lang="scss">
    .comments-container {
        width: 80%;
        background-color: rgb(209, 221, 232);
        border-radius: 20px;
        padding: 15px;
    }

    ul {
        list-style: none;
    }
</style>
