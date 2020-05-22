# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, unique: true, index: true　|
|email|string|null: false, unique: true, index: true　|

- has_many: messages
- has_many: groups, through:: groups_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|
|user_id｜integer|null: false, foreign_key: true|
|group_id|integer|null: false,foreign_key: true｜
|image|string｜

- belongs_to:user_id
- belongs_to:group_id

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, |

- has_many: users, through:: groups_users
- has_many: messages
## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|references :user|integer|foreign_key: true|
|references :group|integer|foreign_key: true|　

### Association
- belongs_to :group
- belongs_to :user




This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
