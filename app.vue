<template>
  <div class="super-container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>


    <footer>
      <div class="footer-date">🥕 Kwotes App, 2024</div>

      <div class="footer-links">
        <ULink to="/terms">Terms of use</ULink>
        <ULink to="/privacy">Privacy Policy</ULink>
        <ULink target="_blank" to="https://tally.so/r/w7Dex0">Feedback</ULink>
        <ULink target="_blank"
          to="https://kwotes-features.notion.site/Vote-for-your-next-feature-01f376b7d97046e09b90061555c990f3?pvs=74">
          Features
        </ULink>
        <ULink target="_blank" to="https://kwotes.substack.com/">Stories</ULink>
        <ULink target="_blank" to="https://www.instagram.com/kwotesapp">Instagram</ULink>
        <ULink target="_blank" to="https://www.facebook.com/kwotesapp">Facebook</ULink>
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
        font-size: 18px;
        color: var(--primary-color);
        font-weight: 600;
        width: 100%;
        -webkit-text-stroke: 1px;
      }
  
      .footer-links {
        display: flex;
        flex-direction: row;
        gap: 12px;
        margin-top: 8px;
        flex-wrap: wrap;
        width: 100%;
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

@media screen and (max-width: 549px) {
  .super-container {
    footer {
      width: 100%;
      padding: 54px;
    }
  }
}

@media screen and (max-width: 460px) {
  .super-container {
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