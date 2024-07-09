<template>
  <div class="super-container">
    <h1 class="title">
      Privacy Policy
      <span class="badge">kwotes</span>
    </h1>

    <div class="paragraph">
      Your privacy is important to us. It is CODING BOX's policy to respect your privacy regarding any information
      we may collect from you across our website, kwotes, and other sites we own and operate including mobile apps.
    </div class="paragraph">

    <h2 class="subtitle">What information do we collect?</h2>
    <div class="paragraph">
      We only ask for personal information when we truly need it to provide a service to you. We collect it by fair
      and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be
      used.
    </div>

    <h2 class="subtitle">Why do we collect it?</h2>
    <div class="paragraph">
      We only retain collected information for as long as necessary to provide you with your requested service. What
      data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as
      unauthorized
      access, disclosure, copying, use or modification.
    </div>

    <h2 class="subtitle">What rights do you have?</h2>
    <div class="paragraph">
      We don't share any personally identifying information publicly or with third-parties, except when required to
      by law.
    </div>

    <h2 class="subtitle">How do we use your information?</h2>
    <div class="paragraph">
      We may use your information for any of the following purposes:
    </div>
    <div class="paragraph">
      Our website may link to external sites that are not operated by us. Please be aware that we have no control
      over the content and practices of these sites, and cannot accept responsibility or liability for their respective
      privacy policies.
    </div>

    <h2 class="subtitle">How do we protect your information?</h2>
    <div class="paragraph">
      We implement a variety of security measures to maintain the safety of your personal information. We offer
      the following
      services:
    </div>
    <div class="paragraph">
      You are free to refuse our request for your personal information, with the understanding that we may be unable
      to provide you with some of your desired services.
    </div>

    <div class="paragraph">
      Your continued use of our website will be regarded as acceptance of our practices around privacy and personal
      information. If you have any questions about how we handle user data and personal information, feel free to
      contact
      us.
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.super-container {
  max-width: 800px;
  padding: 1em;
  margin: 0 auto;
  margin-top: 42px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 24px;
    -webkit-text-stroke: 1.7px;

    .badge {
      font-family: 'Fredoka';
      font-size: 14px;
      font-weight: 400;
      -webkit-text-stroke: 0px;
      display: block;
    }
  }

  .subtitle {
    font-size: 22px;
    font-weight: 600;
    -webkit-text-stroke: 0.5px;
  }
  
  .paragraph {
    font-size: 18px;
    font-weight: 300;
  }
  
  .paragraph:not(:last-child) {
    margin-bottom: 3em;
  }
}
</style>