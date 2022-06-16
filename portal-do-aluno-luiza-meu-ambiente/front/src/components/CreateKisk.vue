<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      content: "",
      tags: "",
      posted: false,
      error: false,
    };
  },
  methods: {
    async createKisk() {
      let user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        this.$router.push("/");
      }

      let request = axios.post("http://localhost:8087/createKisk", {
        title: this.title,
        content: this.content,
        author: {
          id: user.id,
          name: user.name,
        },
        isArticle: false,z
      });

      await request
        .then((response) => {
          if (response.statusText == "OK") {
            this.posted = true;
          }
        })
        .catch((err) => {
          if (err.response.statusText == "Unauthorized") {
            console.log(
              "Unauthorized, that user can't be found at our system!"
            );
          }
          console.log(err);
          this.error = true;
        });
    },
  },
};
</script>