<template>
  <div class="super-container">
    <UButton class="beta-tester-button" label="Become a beta tester" to="https://cutt.ly/1ektXt3R" target="_blank"
      color="white" variant="link">
    </UButton>

    <header>
      <NuxtImg class="app-icon" src="/images/kwotes-icon.svg" width="100" height="100" alt="app icon" srcset="" />
      <h1 class="title">Kwotes</h1>
      <h2 class="subtitle">Quote your way: Create, customize and share inspiration</h2>

      <a href="https://cutt.ly/tejBc8V1" target="_blank"><img
          src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=593955&theme=light"
          alt="Kwotes&#0032;App - Quote&#0032;it&#0044;&#0032;like&#0032;it&#0044;&#0032;share&#0032;it | Product Hunt"
          style="width: 250px; height: 54px;" width="250" height="54" /></a>

      <UButton class="store-badge" @click="onClickAppStore" color="white" variant="ghost">
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
              <ULink to="https://bento.me/rootasjey" target="_blank"><u>Jérémie</u></ULink> is a creative developer and 
              <ULink
                to="https://bento.me/lucillevigne" target="_blank">
                <u>Lucille</u>
              </ULink>,
              a visionary and creative product owner.
              They both love bringing innovative projects to life and are behind the app and its charming carrot
              mascot.
            </div>
          </div>

          <NuxtImg class="kwotes-team" src="/images/kwotes-team.png" alt="Kwotes team" srcset="" />

          <div class="paragraph mt-8">
            <div class="paragraph-title">
              What are the next features to come?
            </div>
            <div class="paragraph-description">
              Exciting updates are coming soon, including notifications, a customizable app icon, and new specific
              categories to enhance your experience.
              <ULink to="https://cutt.ly/Mekyiu7v" target="_blank">
                <u>
                  Vote for your features here.
                </u>
              </ULink>
            </div>
          </div>

          <div class="paragraph mt-8">
            <div class="paragraph-title">
              Convo, bug or feedbacks we're open 24/7!
            </div>
            <div class="paragraph-description">
              We value your input and your user experience.
              <ULink to="https://cutt.ly/2ekyu0Dx" target="_blank"><u>Reply to our survey.</u></ULink>, vote for
              upcoming
              features and
              <ULink to="mailto:hello@kwotes.fr" target="_blank"><u>contact us</u></ULink> directly with your
              suggestions.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useJune } from '../hooks/useJune';
const { analytics } = useJune();

analytics.track("visits", { path: "/" });

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

const onClickAppStore = () => {
  analytics.track("click_app_store", { path: "/" });
  window.open("https://cutt.ly/fejVZHf6", "_blank");
};
</script>

<style scoped>
.super-container {
  padding: 60px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: underline;
    cursor: pointer;
  }

  .beta-tester-button {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  header {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
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

    margin-bottom: 24px;
  }

  .store-badge {
    margin-top: 8px;

    &:hover {
      background-color: transparent;
    }
    
    .store-badge-img {
      width: 180px;
    }
  }

  .body {
    padding: 60px;
    padding-bottom: 0;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

        font-size: 20px;

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
}

@media screen and (max-width: 1250px) {
  .super-container {
    .body {
      .card {
        height: 320px;
        width: 90%;
        
        .card-cover {
          height: 100%;
          width: 90%;
        }

        .card-caption {
          font-size: 16px;
        }
      }
    }
  }
}

@media screen and (max-width: 1174px) {
  .super-container {
    .body {
      .card {
        height: 260px;
        width: 90%;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .super-container {
    .body {
      .card {
        height: 220px;
        width: 90%;

        .card-caption {
          font-size: 14px;
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .super-container {
    padding: 60px;
  
    .body {
      padding: 40px;
      max-width: 100%;

      .card {
        height: 240px;
        width: 90%;
        
        .card-cover {
          height: 100%;
          width: 90%;
        }

        .card-caption {
          height: 100%;
          padding: 24px;
          font-size: 12px;
        }
      }

      .body-bottom {
        .paragraphs {
          .paragraph {
            .paragraph-title {
              font-size: 18px;
            }
            
            .paragraph-description {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 789px) {
  .super-container {
    padding: 12px;
    padding-top: 48px;

    .title {
      font-size: 32px;
      font-weight: 400;
      line-height: 1.2;
      -webkit-text-stroke: 1.5px var(--primary-color);
    }
  
    .subtitle {
      font-size: 28px;
      font-weight: 600;
      line-height: 1.2;
      -webkit-text-stroke: 1.7px black;
      width: 100%;
    }

    .body {
      padding: 0px;
      padding-top: 48px;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .card {
        height: 260px;
        width: 90%;
        
        .card-cover {
          height: 100%;
          width: 90%;
        }

        .card-caption {
          height: 100%;
          padding: 24px;
          font-size: 14px;
        }
      }

      .body-bottom {
        text-align: center;

        .paragraphs {
          width: 100%;
          .paragraph {
            .paragraph-title {
              font-size: 18px;
            }
            
            .paragraph-description {
              font-size: 14px;
            }
          }
        }
      }
    }

    footer {
      width: 100%;
      padding: 54px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .footer-date {
        text-align: center;
        margin-bottom: 0px;
      }

      .footer-links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0px;

        font-size: 12px;
        line-height: 1.5;
      }
    }
  }
}

@media screen and (max-width: 689px) {
  .super-container {
    padding: 12px;
    padding-top: 48px;
    
    .subtitle {
        width: 100%;
      }

    .body {

      .card {
        height: 260px;
        width: 90%;
        
        .card-cover {
          height: 100%;
          width: 90%;
        }

        .card-caption {
          height: 100%;
          padding: 24px;
          font-size: 14px;
        }
      }

      .body-bottom {
        .paragraphs {
          .paragraph {
            .paragraph-title {
              font-size: 18px;
            }
            
            .paragraph-description {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 636px) {
  .super-container {
    .body {
      .card {
        height: 240px;
        width: 90%;
        
        .card-cover {
          height: 100%;
          width: 90%;
        }

        .card-caption {
          height: 100%;
          padding: 24px;
          font-size: 14px;
        }
      }
    }
  }
}

@media screen and (max-width: 549px) {
  .super-container {
    padding: 12px;
    padding-top: 48px;
    
    .subtitle {
      width: 100%;
    }

    .body {
      padding: 0px;
      padding-top: 48px;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .card {
        height: 180px;
        width: 90%;
        border-radius: 36px;
        
        .card-cover {
          height: 100%;
          width: 90%;
        }

        .card-caption {
          height: 100%;
          padding: 14px;
          font-size: 12px;
        }

        &.right .card-caption {
          right: 24px;
        }
        
        &.left .card-caption {
          left: 24px;
        }
      }

      .body-bottom {
        .paragraphs {
          .paragraph {
            .paragraph-title {
              font-size: 18px;
            }
            
            .paragraph-description {
              font-size: 14px;
            }
          }
        }
      }
    }

    footer {
      width: 100%;
      padding: 54px;
    }
  }
}

@media screen and (max-width: 460px) {
  .super-container {
    padding: 12px;
    padding-top: 48px;
    
    .subtitle {
      width: 100%;
    }

    .body {
      padding: 0px;
      padding-top: 48px;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .card {
        height: 150px;
        width: 90%;
        border-radius: 36px;
        
        .card-cover {
          height: 100%;
          width: 100%;
        }

        .card-caption {
          height: 100%;
          padding: 14px;
          font-size: 10px;
        }

        &.right .card-caption {
          right: 12px;
        }
        
        &.left .card-caption {
          left: 12px;
        }
      }

      .body-bottom {
        .paragraphs {
          .paragraph {
            .paragraph-title {
              font-size: 18px;
            }
            
            .paragraph-description {
              font-size: 14px;
            }
          }
        }
      }
    }

    footer {
      width: 100%;
      padding: 32px;
      padding-top: 0;
      
      .copyright {
          margin-top: 28px;
          font-size: 14px;
          text-align: center;
      
          font-weight: 400;
      
          width: 90%;
          -webkit-text-stroke: 1px;
        }
    }
  }
}
</style>