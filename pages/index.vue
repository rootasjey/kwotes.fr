<template>
  <div class="container">
    <header>
      <NuxtImg class="app-icon" src="/images/kwotes-icon.svg" width="100" height="100" alt="app icon" srcset="" />
      <h1 class="title">Kwotes</h1>
      <h2 class="subtitle">Quotes your way: Create, customize and share inspiration</h2>
      <UButton class="store-badge" to="https://apps.apple.com/fr/app/kwotes/id6478239805?platform=iphone" color="white"
        variant="ghost">
        <NuxtImg class="store-badge-img" src="/images/download-app-store.svg" alt="app icon" srcset="" />
      </UButton>
    </header>

    <div class="body">
      <div :class="`card ${card.align}`" v-for="card in cardData">
        <NuxtImg class="card-cover" :src="card.cover" :alt="card.title" srcset="" />
        <div class="card-caption">
          <div>
            <b>{{ card.title }}</b>
            <span class="subtext">{{ card.subtext }}</span>
          </div>
        </div>
      </div>

      <div class="body-bottom">
        <span class="emoji">🥕</span>
        <span class="body-bottom-text">And so much more to come!</span>

        <div class="paragraphs">
          <div class="paragraph">
            <div class="paragraph-title">
              Who is behind Kwotes App and the carrot?
            </div>
            <div class="paragraph-description">
              <u>Jérémie</u> is a creative developer and <u>Lucille</u>, a visionary and creative <u>product owner</u>.
              They both love bringing innovative projects to life and are behind the app and its charming carrot mascot.
            </div>
          </div>

          <NuxtImg class="kwotes-team" src="/images/kwotes-team.png" alt="Kwotes team" srcset="" />

          <div class="paragraph mt-8">
            <div class="paragraph-title">
              What are the next features to come?
            </div>
            <div class="paragraph-description">
              Exciting updates are coming soon, including notifications, a customizable app icon, and new specific
              categories to enhance your experience. <a href="https://kwotes.substack.com/"> Vote for your features
                here</a>.
            </div>
          </div>

          <div class="paragraph mt-8">
            <div class="paragraph-title">
              Convo, bug or feedbacks we're open 24/7!
            </div>
            <div class="paragraph-description">
              We value your input and your user experience.
              <a href="https://kwotes.substack.com/">Reply to our survey</a>, vote for upcoming features and
              <a href="mailto:hello@kwotes.fr">contact us</a> directly with your suggestions.
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div class="footer-date">🥕 Kwotes App, 2024</div>

        <div class="footer-links">
          <span><a href="https://kwotes.substack.com/">Terms of use</a></span>
          <span><a href="https://kwotes.substack.com/">Privacy Policy</a></span>
          <span><a href="https://kwotes.substack.com/">Feedback</a></span>
          <span><a href="https://kwotes.substack.com/">Features</a></span>
          <span><a href="https://kwotes.substack.com/">Stories</a></span>
          <span><a href="https://kwotes.substack.com/">Instagram</a></span>
          <span><a href="https://kwotes.substack.com/">Facebook</a></span>
        </div>

        <span class="copyright">Made with 🥕in Paris 🧡</span>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
const cardData = [
  {
    id: 1,
    title: "Create • ",
    cover: "/images/create.png",
    align: "right",
    subtext: "Craft unique, customized quotes to express your creativity. You can easily compose and share your own quotes. Simply type your text and share it instantly.",
  },
  {
    id: 2,
    title: "Discover • ",
    cover: "/images/discover.png",
    align: "left",
    subtext: "Delve into a full database of quotes organized by themes, authors, and references. Use our advanced search tool to uncover new gems and explore detailed author bios.",
  },
  {
    id: 3,
    title: "Build • ",
    cover: "/images/lists.png",
    align: "right",
    subtext: "Compile your favorite quotes into personalized lists for any occasion. Add or remove quotes effortlessly to keep your collections fresh and motivating.",
  },
  {
    id: 4,
    title: "Share • ",
    cover: "/images/share.png",
    align: "left",
    subtext: "Share   Distribute inspiring quotes easily via text, social media, or  images. Spread positivity and motivation to friends, family, and followers with a few simple taps.",
  },
]
</script>

<style>
.container {
  padding: 60px;

  header {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* margin-bottom: 48px; */
  }

  .app-icon {
    margin-bottom: 16px;
  }

  .title {
    font-size: 36px;
    font-weight: 400;
    line-height: 1.2;
    color: var(--primary-color);
    font-family: 'Fredoka';
    -webkit-text-stroke: 1.5px var(--primary-color);
  }

  .subtitle {
    font-size: 32px;
    font-family: 'Nunito';
    font-weight: 600;
    line-height: 1.2;
    -webkit-text-stroke: 1.7px black;
    width: 550px;
  }

  .store-badge {
    margin-top: 24px;

    &:hover {
      background-color: transparent;
    }
    
    .store-badge-img {
      width: 180px;
    }
  }

  .body {
    padding: 60px;

    max-width: 90%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    
    .card {
      height: 420px;
      width: 100%;
      
      background-color: #FFF;
      border-radius: 54px;
      border-style: solid;
      border-color: #D8DFF9;
      border-width: 3px;
      position: relative;

      .card-cover {
        border-radius: 40px;
        position: absolute;
        bottom: 0px;
        height: 100%;

        object-fit: cover;
      }

      .card-caption {
        width: 50%;
        height: 100%;
        position: absolute;

        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 24px;
        width: 50%;

        font-size: 24px;

        .subtext {
          color: #838282;
        }
      }

      &.right .card-caption {
        right: 48px;
      }
      
      &.left .card-caption {
        left: 48px;
      }
      
      &.left .card-cover {
        right: 0px;
      }
      
      &.right .card-cover {
        left: 0px;
      }
    }

    .body-bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      .body-bottom-text {
        font-size: 24px;
        font-weight: 600;
        -webkit-text-stroke: 1.5px;
      }

      .emoji {
        font-size: 36px;
      }

      .paragraphs {
        margin-top: 48px;
        width: 80%;
        font-family: 'Nunito';

        .kwotes-team {
          width: 260px;
          margin: 0 auto;
          margin-top: 28px;
        }
        
        .paragraph {
          .paragraph-title {
            font-size: 22px;
            font-weight: 600;
            -webkit-text-stroke: 0.5px;
          }
          
          .paragraph-description {
            font-size: 18px;
            font-weight: 300;
          }
        }
      }
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 24px;

    .footer-date {
      font-size: 18px;
      color: var(--primary-color);
      font-weight: 600;
      width: 80%;
      -webkit-text-stroke: 1px;
    }

    .footer-links {
      margin-top: 8px;
      display: flex;
      gap: 12px;
      width: 80%;

      opacity: 0.6;
    }

    .copyright {
      margin-top: 42px;
      font-size: 19px;
      text-align: center;
      
      font-family: 'Fredoka';
      font-weight: 400;
      color: var(--primary-color);

      width: 80%;
      -webkit-text-stroke: 1px;
    }
  }
}
</style>