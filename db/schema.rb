# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171121192839) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "investments", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "startup_id", null: false
    t.integer "amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "customer"
    t.string "currency"
    t.string "payment_category"
    t.string "payment_id"
    t.string "startupName"
    t.string "sharesBought"
  end

  create_table "startups", force: :cascade do |t|
    t.string "name", null: false
    t.string "category"
    t.text "description", null: false
    t.integer "desired_funding", null: false
    t.integer "current_funding", null: false
    t.integer "shares_available", null: false
    t.integer "user_id"
    t.string "photo_url", null: false
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.datetime "created_at"
    t.string "sec_pic"
    t.text "briefDesc"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider"
    t.string "uid"
    t.string "email"
    t.string "token"
    t.string "refresh_token"
    t.datetime "oauth_expires_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image"
    t.string "first_name"
    t.string "last_name"
  end

end
