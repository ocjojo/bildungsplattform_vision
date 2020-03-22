<template>
  <div class="room">
    <header>
      <div class="track-title">{{ room.Name }}</div>
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
      <template v-for="message of messages">
        <div class="feed-item" v-bind:key="message.ID">
          <div class="avatar">
            <img src="@/assets/defaultAvatar.svg" alt="avatar" />
            <div>{{ message.AuthorID }}</div>
          </div>
          <div class="post-container">
            <div class="time">{{ message.CreatedAt }}</div>
            {{ message.Message }}
          </div>
        </div>
      </template>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "@/store";
export default {
  data() {
    return {
      room: {},
      messages: []
    };
  },
  methods: {
    getData(routeName) {
      const getters = mapGetters(["room", "roomMessages"]);
      const id = routeName.split("-", 2)[0];

      getters.room(id).then(room => {
        this.room = room;
      });
      getters.roomMessages(id).then(messages => {
        this.messages = messages;
      });
    }
  },
  created() {
    this.getData(this.$route.params.routeName);
  },
  beforeRouteUpdate(to, from, next) {
    this.getData(to.params.routeName);
    next();
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
}

.time {
  font-size: 1.4rem;
  margin-bottom: 10px;
}
</style>
