<template>
  <CardLarge>
    <div class="text-center">
      <h2 class="text-4xl font-bold">
        <Icon name="lucide:rocket" class="text-primary mr-2 align-middle" />
        Get Started in Minutes
      </h2>
      <p class="text-xl text-base-content/70">From zero to a rock-solid workstation</p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <Card>
        <div class="text-6xl font-bold text-primary mb-2">1</div>
        <h3 class="card-title text-2xl">Download & Install</h3>
        <p class="text-base-content/70">Grab the latest ISO, flash it, and boot. Guided installer handles everything</p>
        <div class="card-actions mt-6">
          <div class="badge badge-primary badge-outline p-4 gap-2">
            <Icon name="lucide:download" />
            ISO Download
          </div>
        </div>
      </Card>

      <Card>
        <div class="text-6xl font-bold text-secondary mb-2">2</div>
        <h3 class="card-title text-2xl">First Boot Setup</h3>
        <p class="text-base-content/70">GUI for account creation, timezone, keymap and locale</p>
        <div class="card-actions mt-6">
          <div class="badge badge-secondary badge-outline p-4 gap-2">
            <Icon name="lucide:settings-2" />
            GUI Setup
          </div>
        </div>
      </Card>

      <Card>
        <div class="text-6xl font-bold text-accent mb-2">3</div>
        <h3 class="card-title text-2xl">You're In!</h3>
        <p class="text-base-content/70">Log in to your desktop. Install tools and start working</p>
        <div class="card-actions mt-6">
          <div class="badge badge-accent badge-outline p-4 gap-2">
            <Icon name="lucide:circle-play" />
            Start Working
          </div>
        </div>
      </Card>
    </div>
  </CardLarge>
</template>
