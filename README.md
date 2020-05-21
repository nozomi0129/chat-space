# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|nickname|integer|null: false, foreign_key: true|
|email|integer|null: false, foreign_key: true|
|password｜integer|null: false, foreign_key: true|

- belongs_to :password
- belongs_to :nickname
- belongs_to :email

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|text|integer|null: false, foreign_key: true|
|image｜integer|null: false, foreign_key: true|
|user_id｜integer|null: false, foreign_key: true|

- belongs_to :id
- belongs_to :text
- belongs_to:image
- belongs_to:user_id

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|

- belongs_to :user_id

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


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
