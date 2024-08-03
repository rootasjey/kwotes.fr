<template>
  <div class="super-container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>


    <footer>
      <div class="footer-date">🥕 Kwotes App, 2024</div>

      <div class="footer-links">
        <div class="footer-links-legal">
          <ULink to="/terms">Terms of use</ULink>
          <ULink to="/privacy">Privacy Policy</ULink>
        </div>
        <span class="separator hidden sm:block">/</span>
        <div class="footer-links-social">
          <ULink target="_blank" to="https://cutt.ly/KektB6QT">Bento</ULink>
          <ULink target="_blank" to="https://cutt.ly/dekt1RTB">Stories</ULink>
          <ULink target="_blank" to="https://cutt.ly/Nekt0mOL">Instagram</ULink>
          <ULink target="_blank" to="https://cutt.ly/0ekt0rTX">Facebook</ULink>
        </div>
      </div>
      <span class="copyright">Made with 🥕in Paris 🧡</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
  const colorMode = useColorMode()
  colorMode.preference = 'light'
</script>

<style scoped>
  .super-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;

    footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 54px;
      margin-left: 24px;
      margin-right: 24px;
      width: 750px;
  
      .footer-date {
        text-align: center;
        font-size: 18px;
        color: var(--primary-color);
        font-weight: 600;
        width: 100%;
        -webkit-text-stroke: 1px;
      }
  
      .footer-links {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 8px;
        flex-wrap: wrap;
        width: 100%;
        opacity: 0.6;

        .footer-links-legal {
          display: flex;
          font-size: 16px;
          gap: 12px;
          flex-direction: row;
        }

        .separator {
          font-size: 16px;
        }

        .footer-links-social {
          display: flex;
          flex-direction: row;
          gap: 12px;
          font-size: 16px;
        }
      }
  
      .copyright {
        margin-top: 42px;
        font-size: 19px;
        text-align: center;
  
        font-family: 'Fredoka';
        font-weight: 400;
  
        width: 80%;
        -webkit-text-stroke: 1px;
      }
    }
  }

@media screen and (max-width: 1000px) {
  .super-container {
    footer {
      width: 100%;
      padding: 54px;
    }
  }
}

@media screen and (max-width: 900px) {
  .super-container {
    footer {
      width: 100%;
      padding: 54px;
    }
  }
}

@media screen and (max-width: 789px) {
  .super-container {
    footer {
      width: 100%;
      padding: 54px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .footer-date {
        margin-bottom: 0px;
      }
    }
  }
}

@media screen and (min-width: 640px) {
  .super-container {
    footer {
      .footer-links {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 12px;

        font-size: 12px;
        line-height: 1.5;
      }
    }
  }
}

@media screen and (max-width: 639px) {
  .super-container {
    footer {
      width: 100%;
      padding: 54px;

      .footer-links {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 4px;

        line-height: 1.5;
      }
    }
  }
}

@media screen and (max-width: 560px) {
  .super-container {
    footer {
      width: 100%;
      padding: 54px;

      .footer-links {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 4px;

        font-size: 12px;
        line-height: 1.5;
      }
    }
  }
}

@media screen and (max-width: 460px) {
  .super-container {
    footer {
      width: 100%;
      padding: 32px;
      padding-top: 0;

      .footer-date {
        font-size: 12px;
      }

      .copyright {
        margin-top: 28px;
        font-size: 14px;
        text-align: center;

        font-weight: 400;

        width: 90%;
        -webkit-text-stroke: 1px;
      }

      .footer-links {
        .footer-links-legal {
          font-size: 12px;
        }

        .footer-links-social {
          font-size: 12px;
        }
      }
    }
  }
}
</style>