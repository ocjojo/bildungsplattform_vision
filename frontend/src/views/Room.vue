<template>
  <div class="room">
    <header>
      <div class="track-title">{{ $route.params.trackName }}</div>
    </header>
    <section>
      <div class="feed-item">
        <div class="avatar">
          <img src="@/assets/defaultAvatar.svg" alt="avatar" />
          <div>Jonas</div>
        </div>
        <div class="new-post-container">
          <textarea
            name="newComment"
            placeholder="Einen neuen Beitrag verfassen..."
          ></textarea>
          <button class="btn">Posten</button>
        </div>
      </div>
      <template v-for="post of posts">
        <div class="feed-item" v-bind:key="post.date">
          <div class="avatar">
            <img src="@/assets/defaultAvatar.svg" alt="avatar" />
            <div>{{ post.user }}</div>
          </div>
          <div class="post-container">
            <div class="time">{{ post.date }}</div>
            {{ post.text }}
          </div>
        </div>
      </template>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          user: "Paul",
          text: "Weiß jemand, was wir heute auf haben?",
          date: "20.03.2020 10:15Uhr"
        },
        {
          user: "Jannik",
          text: "Das ist doch voll easy, ich erklär dir das im Chat",
          date: "20.03.2020 8:23Uhr"
        },
        {
          user: "Stefan",
          text: "Ich hab das irgendwie nicht verstanden",
          date: "20.03.2020 8:22Uhr"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
header {
  background: url("../assets/defaultRoom.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 320px;
  position: relative;
  .track-title {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 100px;
    background: rgba(37, 37, 37, 0.5);
    color: #fff;
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 2.4rem;
    font-weight: 200;
  }
}

section {
  padding: 40px;
}

.feed-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  .avatar {
    margin-right: 20px;
    div {
      font-size: 1.3rem;
      margin-top: 3px;
      text-align: center;
    }
  }
}
textarea {
  width: 700px;
  height: 100px;
  resize: none;
  border: solid 1px #cecaca;
  border-radius: 4px;
  font-size: 1.6rem;
  padding: 10px;
  :focus {
    outline: none;
  }
}
.new-post-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 700px;
  button {
    margin-top: 10px;
  }
}
h2 {
  font-weight: 200;
}

.post-container {
  margin-top: 3px;
}

.time {
  font-size: 1.4rem;
  margin-bottom: 10px;
}
</style>
